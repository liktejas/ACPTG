import React from 'react'

const Capabilities = ({ onCapabilitiesChange, capabilities }) => {
    const changeCapabilities = (e) => {
        onCapabilitiesChange({ ...capabilities, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div class="tab-pane fade" id="pills-capabilities" role="tabpanel" aria-labelledby="pills-capabilities-tab" tabindex="0">
                <div className="row">
                    <div className="col-md-4">
                        <div class="my-3">
                            <label for="capabilities" className="form-label fw-semibold">Capabilities</label>
                            <select class="form-select" id="capabilities" name="capabilities" aria-label="Default select example" onChange={changeCapabilities}>
                                {capabilities.capabilities == "base" && <><option selected value="base">Base Capabilities</option>
                                    <option value="custom">Custom Capabilities</option></>}
                                {capabilities.capabilities == "custom" && <><option value="base">Base Capabilities</option>
                                    <option selected value="custom">Custom Capabilities</option></>}
                            </select>
                            <p>Set user capabilities to manage post type.</p>
                        </div>
                        <div class="my-3">
                            <label for="base_capability_type" className="form-label fw-semibold">Base Capability Type</label>
                            <select class="form-select" id="base_capability_type" name="base_capability_type" aria-label="Default select example" onChange={changeCapabilities}>
                                {capabilities.base_capability_type == "post" && <><option selected value="post">Posts</option>
                                    <option value="page">Pages</option></>}
                                {capabilities.base_capability_type == "page" && <><option value="post">Posts</option>
                                    <option selected value="page">Pages</option></>}
                            </select>
                            <p>Used as a base to construct capabilities.</p>
                        </div>
                    </div>
                    {capabilities.capabilities == "custom" &&
                        <>
                            <div className="col-md-4">
                                <div class="my-3">
                                    <label for="capability_read_post" className="form-label fw-semibold">Read Post</label>
                                    <input type="text" className="form-control" id="capability_read_post" name="capability_read_post" value={capabilities.capability_read_post} onChange={changeCapabilities} />
                                </div>
                                <div class="my-3">
                                    <label for="capability_read_private_post" className="form-label fw-semibold">Read Private Post</label>
                                    <input type="text" className="form-control" id="capability_read_private_post" name="capability_read_private_post" value={capabilities.capability_read_private_post} onChange={changeCapabilities} />
                                </div>
                                <div class="my-3">
                                    <label for="capability_publish_posts" className="form-label fw-semibold">Publish Posts</label>
                                    <input type="text" className="form-control" id="capability_publish_posts" name="capability_publish_posts" value={capabilities.capability_publish_posts} onChange={changeCapabilities} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div class="my-3">
                                    <label for="capability_delete_posts" className="form-label fw-semibold">Delete Post</label>
                                    <input type="text" className="form-control" id="capability_delete_posts" name="capability_delete_posts" value={capabilities.capability_delete_posts} onChange={changeCapabilities} />
                                </div>
                                <div class="my-3">
                                    <label for="capability_edit_post" className="form-label fw-semibold">Edit Post</label>
                                    <input type="text" className="form-control" id="capability_edit_post" name="capability_edit_post" value={capabilities.capability_edit_post} onChange={changeCapabilities} />
                                </div>
                                <div class="my-3">
                                    <label for="capability_edit_posts" className="form-label fw-semibold">Edit Posts</label>
                                    <input type="text" className="form-control" id="capability_edit_posts" name="capability_edit_posts" value={capabilities.capability_edit_posts} onChange={changeCapabilities} />
                                </div>
                                <div class="my-3">
                                    <label for="capability_edit_others_posts" className="form-label fw-semibold">Edit Others Posts</label>
                                    <input type="text" className="form-control" id="capability_edit_others_posts" name="capability_edit_others_posts" value={capabilities.capability_edit_others_posts} onChange={changeCapabilities} />
                                </div>
                            </div>
                        </>}
                </div>
            </div>
        </>
    )
}

export default Capabilities