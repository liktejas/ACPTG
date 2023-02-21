import React from 'react'

const Permalinks = ({ onPermalinkChange, permalink }) => {
    const changePermalink = (e) => {
        onPermalinkChange({ ...permalink, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div class="tab-pane fade" id="pills-permalinks" role="tabpanel" aria-labelledby="pills-permalinks-tab" tabindex="0">
                <div className="row">
                    <div className="col-md-4">
                        <div class="my-3">
                            <label for="permalink_rewrite" className="form-label fw-semibold">Permalink Rewrite</label>
                            <select class="form-select" id="permalink_rewrite" name="permalink_rewrite" aria-label="Default select example" onChange={changePermalink}>
                                {permalink.permalink_rewrite == "false" && <>
                                    <option selected value="false">No permalink (prevent URL rewriting)</option>
                                    <option value="true">Default permalink (post type key)</option>
                                    <option value="custom">Custom permalink</option></>}
                                {permalink.permalink_rewrite == "true" && <>
                                    <option value="false">No permalink (prevent URL rewriting)</option>
                                    <option selected value="true">Default permalink (post type key)</option>
                                    <option value="custom">Custom permalink</option></>}
                                {permalink.permalink_rewrite == "custom" && <>
                                    <option value="false">No permalink (prevent URL rewriting)</option>
                                    <option value="true">Default permalink (post type key)</option>
                                    <option selected value="custom">Custom permalink</option></>}
                            </select>
                            <p>Use Default Permalinks (using post type key), prevent automatic URL rewriting (no pretty permalinks), or set custom permalinks.</p>
                        </div>
                    </div>
                    {permalink.permalink_rewrite == "custom" && <>
                        <div className="col-md-4">
                            <div class="my-3">
                                <label for="permalink_url_slug" className="form-label fw-semibold">URL Slug</label>
                                <input type="text" className="form-control" id="permalink_url_slug" name="permalink_url_slug" value={permalink.permalink_url_slug} onChange={changePermalink}/>
                                <p>Pretty permalink base text. i.e. www.example.com/product/</p>
                            </div>
                            <div class="my-3">
                                <label for="permalink_use_url_slug" className="form-label fw-semibold">Use URL Slug</label>
                                <select class="form-select" id="permalink_use_url_slug" name="permalink_use_url_slug" aria-label="Default select example" onChange={changePermalink}>
                                    {permalink.permalink_use_url_slug 
                                    ? <><option selected value="true">Yes</option>
                                    <option value="false">No</option></> 
                                    : <><option value="true">Yes</option>
                                    <option selected value="false">No</option></>}
                                </select>
                                <p>Use Post Type slug as URL base. Default: Yes</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="my-3">
                                <label for="permalink_pagination" className="form-label fw-semibold">Pagination</label>
                                <select class="form-select" id="permalink_pagination" name="permalink_pagination" aria-label="Default select example" onChange={changePermalink}>
                                    {permalink.permalink_pagination 
                                    ? <><option selected value="true">Yes</option>
                                    <option value="false">No</option></> 
                                    : <><option value="true">Yes</option>
                                    <option selected value="false">No</option></>}
                                </select>
                                <p>Allow post-type pagination. Default: Yes</p>
                            </div>
                            <div class="my-3">
                                <label for="permalink_feeds" className="form-label fw-semibold">Feeds</label>
                                <select class="form-select" id="permalink_feeds" name="permalink_feeds" aria-label="Default select example" onChange={changePermalink}>
                                    {permalink.permalink_feeds 
                                    ? <><option selected value="true">Yes</option>
                                    <option value="false">No</option></>
                                    : <><option value="true">Yes</option>
                                    <option selected value="false">No</option></>}
                                </select>
                                <p>Build feed permastruct. Default: Yes</p>
                            </div>
                        </div>
                    </>}
                </div>
            </div>
        </>
    )
}

export default Permalinks