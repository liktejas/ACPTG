import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { ProgressBar } from 'react-loader-spinner'
import EditCPT from './EditCPT'

const App = () => {

  const [acptgList, setACPTGList] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  const [isEdit, setIsEdit] = useState(false)

  const [cptKey, setCPTKey] = useState(0)

  const fetchACPTGURL = appLocalizer.apiURL + '/acptg/v2/acptg_list_all'

  const deleteACPTGURL = appLocalizer.apiURL + '/acptg/v2/acptg_delete_cpt'

  useEffect(() => {
    axios.get(fetchACPTGURL)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data)
          setACPTGList(res.data)
          setIsLoading(false)
        }
      })
  }, [])

  const onActions = (cpt) => {
    setIsEdit(true)
    setCPTKey(cpt)
  }

  const promptButtons = Swal.mixin({})

  const onDelete = (cpt) => {
    promptButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(cpt)
        axios.post(deleteACPTGURL, {
          cpt
        }, {
          headers: {
            'content-type': 'application/json',
            'X-WP-NONCE': appLocalizer.nonce
          }
        })
          .then((res) => {
            console.log(res)
            if (res.data.status == 200) {
              const afterDelete = acptgList.filter((current) => {
                return cpt != current.option_name
              })
              document.getElementById('menu-posts-' + cpt.slice(6).toLowerCase()).remove()
              setACPTGList(afterDelete)
              promptButtons.fire(
                'Deleted!',
                'CPT has been deleted.',
                'success'
              )
            }
          })
      }
    })
  }

  return (
    <>
      {!isEdit &&
        <div className="container-fluid">
          <h1 className="wp-heading-inline">Advanced CPT Generator</h1> <br />
          {isLoading && <div className="progress_loader">
            <ProgressBar
              height="100"
              width="100"
              ariaLabel="progress-bar-loading"
              wrapperStyle={{}}
              wrapperClass="progress-bar-wrapper"
              borderColor='#F4442E'
              barColor='#51E5FF'
              visible={true}
            />
          </div>}
          {!isLoading && <>
            <a href={appLocalizer.siteURL + 'wp-admin/admin.php?page=acptg-add-new'} className="btn btn-success my-3">Add New</a>
            <table class="table table-bordered table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                {
                  acptgList.map((current) => {
                    console.log(current)
                    return (
                      <tr>
                        <th scope="row">{current.option_name.slice(6)}</th>
                        <td><button onClick={() => onActions(current.option_name)} className="btn btn-sm btn-warning"><span class="dashicons dashicons-edit"></span></button></td>
                        <td><button onClick={() => onDelete(current.option_name)} className="btn btn-sm btn-danger"><span class="dashicons dashicons-trash"></span></button></td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </>}
        </div>
      }
      {isEdit &&
        <>
          <EditCPT cptKey={cptKey} />
        </>
      }
    </>
  )
}

export default App