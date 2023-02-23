import React from 'react'

const Rest = ({onRestChange, rest}) => {
    const changeRest = (e) => {
        onRestChange({...rest, [e.target.name] : e.target.value})
    }
    return (
        <>
            <div class="tab-pane fade" id="pills-restapi" role="tabpanel" aria-labelledby="pills-restapi-tab" tabindex="0">
                <div className="row">
                    <div className="col-md-4">
                        <div class="my-3">
                            <label for="show_in_rest" className="form-label fw-semibold">Show in REST</label>
                            <select class="form-select" id="show_in_rest" name="show_in_rest" aria-label="Default select example"onChange={changeRest}>
                                {rest.show_in_rest == "" && <>
                                <option selected value="">Choose...</option>
                                <option value="true">Yes</option>
                                <option value="false">No</option></>} 
                                {rest.show_in_rest == "true" && <>
                                <option value="">Choose...</option>
                                <option selected value="true">Yes</option>
                                <option value="false">No</option></>} 
                                {rest.show_in_rest == "false" && <>
                                <option value="">Choose...</option>
                                <option value="true">Yes</option>
                                <option selected value="false">No</option></>} 
                            </select>
                            <p>Whether to add the post type route in the REST API 'wp/v2' namespace.</p>
                        </div>
                    </div>
                    {rest.show_in_rest != '' && 
                    <>
                    <div className="col-md-4">
                        <div class="my-3">
                            <label for="rest_base" className="form-label fw-semibold">Reset Base</label>
                            <input type="text" className="form-control" id="rest_base" name="rest_base" value={rest.rest_base} onChange={changeRest}/>
                            <p>To change the base url of REST API route. Default is the post type key.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="my-3">
                            <label for="rest_controller_class" className="form-label fw-semibold">REST Controller Class</label>
                            <input type="text" className="form-control" id="rest_controller_class" name="rest_controller_class" value={rest.rest_controller_class} onChange={changeRest}/>
                            <p>REST API Controller class name. Default is 'WP_REST_Posts_Controller'.</p>
                        </div>
                    </div>
                    </>}
                </div>
            </div>
        </>
    )
}

export default Rest