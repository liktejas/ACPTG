import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [acptgList, setACPTGList] = useState([])

  const fetchACPTGURL = appLocalizer.apiURL + '/acptg/v2/acptg_list_all'

  useEffect(() => {
    axios.get(fetchACPTGURL)
    .then((res) => {
      if( res.status === 200 ) {
        console.log(res.data)
        setACPTGList(res.data)
      }
    })
  }, [])
  
  
  return (
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
            acptgList.map((current, index) => {
              console.log(current)
              return (
                <tr>
                <th scope="row">{current.option_name}</th>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App