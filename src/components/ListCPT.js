import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EditCPT from './EditCPT'

const App = () => {

  const [acptgList, setACPTGList] = useState([])

  const [isEdit, setIsEdit] = useState(false)

  const [cptKey, setCPTKey] = useState(0)

  const fetchACPTGURL = appLocalizer.apiURL + '/acptg/v2/acptg_list_all'

  useEffect(() => {
    axios.get(fetchACPTGURL)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data)
          setACPTGList(res.data)
        }
      })
  }, [])

  const onActions = (cpt) => {
    setIsEdit(true)
    setCPTKey(cpt)
  }

  return (
    <>
      {!isEdit &&
        <div className="container-fluid">
          <h1 className="wp-heading-inline">Advanced CPT Generator</h1> <br />
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
                      <td><button onClick={() => onActions(current.option_name)} className="btn btn-sm btn-danger"><span class="dashicons dashicons-trash"></span></button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
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