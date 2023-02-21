import React from 'react'

const PostTypes = ({ onPTChange, postTypes }) => {
    const changePT = (e) => {
        onPTChange({...postTypes, [e.target.name] : e.target.value})
    }
    return (
        <>
            <div class="tab-pane fade show active" id="pills-posttype" role="tabpanel" aria-labelledby="pills-posttype-tab" tabindex="0">
                <div className="row">
                    <div className="col-md-4">
                        <div class="my-3">
                            <label for="post_type_key" className="form-label fw-semibold">Post Type Key</label>
                            <input type="text" className="form-control" name="post_type_key" id="post_type_key" value={postTypes.post_type_key} onChange={changePT} />
                            <p>Key used in the code. Up to 20 characters, lowercase, no spaces.</p>
                        </div>
                        <div class="my-3">
                            <label for="description_key" className="form-label fw-semibold">Description</label>
                            <input type="text" className="form-control" name="description_key" id="description_key" value={postTypes.description_key} onChange={changePT} />
                            <p>A short descriptive summary of the post type.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="my-3">
                            <label for="name_singular" className="form-label fw-semibold">Name (Singular)</label>
                            <input type="text" className="form-control" name="name_singular" id="name_singular" value={postTypes.name_singular} onChange={changePT} />
                            <p>Post type singular name. e.g. Product, Event or Movie.</p>
                        </div>
                        <div class="my-3">
                            <label for="name_plural" className="form-label fw-semibold">Name (Plural)</label>
                            <input type="text" className="form-control" name="name_plural" id="name_plural" value={postTypes.name_plural} onChange={changePT} />
                            <p>Post type plural name. e.g. Products, Events or Movies.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="my-3">
                            <label for="link_to_taxonomies" className="form-label fw-semibold">Link To Taxonomies</label>
                            <input type="text" className="form-control" name="link_to_taxonomies" id="link_to_taxonomies" value={postTypes.link_to_taxonomies} onChange={changePT} />
                            <p>Comma separated list of Taxonomies.</p>
                        </div>
                        <div class="my-3">
                            <label for="hierarchical" className="form-label fw-semibold">Hierarchical</label>
                            <select class="form-select" aria-label="Default select example" name="hierarchical" id="hierarchical" onChange={changePT}>
                                {postTypes.hierarchical
                                    ? <><option value="false">No (like posts)</option>
                                        <option selected value="true">Yes (like pages)</option></>
                                    : <><option selected value="false">No (like posts)</option>
                                        <option value="true">Yes (like pages)</option></>}
                            </select>
                            <p>Hierarchical post types allows descendants.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostTypes
