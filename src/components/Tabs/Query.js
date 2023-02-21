import React from 'react'

const Query = ({onQueryChange, query}) => {
    const changeQuery = (e) => {
        onQueryChange({...query, [e.target.name] : e.target.value})
    }
    return (
        <>
            <div class="tab-pane fade" id="pills-query" role="tabpanel" aria-labelledby="pills-query-tab" tabindex="0">
                <div className="row">
                    <div className="col-md-4">
                        <div class="my-3">
                            <label for="query" className="form-label fw-semibold">Query</label>
                            <select class="form-select" id="query" name="query" aria-label="Default select example" onChange={changeQuery}>
                                {query.query 
                                ? <><option selected value="false">Default (post type key)</option>
                                <option value="true">Custom query variable</option></> 
                                : <><option value="false">Default (post type key)</option>
                                <option selected value="true">Custom query variable</option></>}
                            </select>
                            <p>Direct query variable used in WP_Query.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="my-3">
                            <label for="publicly_queryable" className="form-label fw-semibold">Publicly Queryable</label>
                            <select class="form-select" id="publicly_queryable" name="publicly_queryable" aria-label="Default select example" onChange={changeQuery}>
                                {query.publicly_queryable ? <><option selected value="true">Yes</option>
                                <option value="false">No</option></> : <><option value="true">Yes</option>
                                <option selected value="false">No</option></>}
                            </select>
                            <p>Enable front end queries as part of parse_request().</p>
                        </div>
                    </div>
                    {query.query == 'true' && 
                    <div className="col-md-4">
                        <div class="my-3">
                            <label for="custom_query" className="form-label fw-semibold">Custom Query</label>
                            <input type="text" className="form-control" id="custom_query" name="custom_query" value={query.custom_query} onChange={changeQuery} />
                            <p>Custom query variable.</p>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Query