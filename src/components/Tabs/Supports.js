import React, {useState} from 'react'

const Supports = ({onOptionsChange, options}) => {
    const changeOptions = (e) => {
        onOptionsChange({...options, [e.target.name] : e.target.value})
    }
    return (
        <>
            <div class="tab-pane fade" id="pills-options" role="tabpanel" aria-labelledby="pills-options-tab" tabindex="0">
                <div className="row">
                    <div className="col-md-4">
                        <div class="my-3">
                            <p className="fw-semibold fs-6">Supports</p>
                            <div>
                                <input class="form-check-input custom-checkbox" type="checkbox" value={options.supports_title_checkbox} name="supports_title_checkbox" id="supports_title_checkbox" checked={options.supports_title_checkbox} onChange={changeOptions} />
                                <label class="form-check-label align-baseline" for="supports_title_checkbox">Title</label>
                            </div>
                            <div>
                                <input class="form-check-input custom-checkbox" type="checkbox" value={options.supports_editor_checkbox} name="supports_editor_checkbox" id="supports_editor_checkbox" checked={options.supports_editor_checkbox} onChange={changeOptions} />
                                <label class="form-check-label align-baseline" for="supports_editor_checkbox">Editor</label>
                            </div>
                            <div>
                                <input class="form-check-input custom-checkbox" type="checkbox" value={options.supports_excerpt_checkbox} name="supports_excerpt_checkbox" id="supports_excerpt_checkbox" checked={options.supports_excerpt_checkbox} onChange={changeOptions} />
                                <label class="form-check-label align-baseline" for="supports_excerpt_checkbox">Excerpt</label>
                            </div>
                            <div>
                                <input class="form-check-input custom-checkbox" type="checkbox" value={options.supports_author_checkbox} name="supports_author_checkbox" id="supports_author_checkbox" checked={options.supports_author_checkbox} onChange={changeOptions} />
                                <label class="form-check-label align-baseline" for="supports_author_checkbox">Author</label>
                            </div>
                            <div>
                                <input class="form-check-input custom-checkbox" type="checkbox" value={options.supports_thumbnail_checkbox} name="supports_thumbnail_checkbox" id="supports_thumbnail_checkbox" checked={options.supports_thumbnail_checkbox} onChange={changeOptions} />
                                <label class="form-check-label align-baseline" for="supports_thumbnail_checkbox">Featured Image</label>
                            </div>
                            <div>
                                <input class="form-check-input custom-checkbox" type="checkbox" value={options.supports_comments_checkbox} name="supports_comments_checkbox" id="supports_comments_checkbox" checked={options.supports_comments_checkbox} onChange={changeOptions} />
                                <label class="form-check-label align-baseline" for="supports_comments_checkbox">Comments</label>
                            </div>
                            <div>
                                <input class="form-check-input custom-checkbox" type="checkbox" value={options.supports_trackbacks_checkbox} name="supports_trackbacks_checkbox" id="supports_trackbacks_checkbox" checked={options.supports_trackbacks_checkbox} onChange={changeOptions} />
                                <label class="form-check-label align-baseline" for="supports_trackbacks_checkbox">Trackbacks</label>
                            </div>
                            <div>
                                <input class="form-check-input custom-checkbox" type="checkbox" value={options.supports_revisions_checkbox} name="supports_revisions_checkbox" id="supports_revisions_checkbox" checked={options.supports_revisions_checkbox} onChange={changeOptions} />
                                <label class="form-check-label align-baseline" for="supports_revisions_checkbox">Revisions</label>
                            </div>
                            <div>
                                <input class="form-check-input custom-checkbox" type="checkbox" value={options.supports_custom_fields_checkbox} id="supports_custom_fields_checkbox" name="supports_custom_fields_checkbox" checked={options.supports_custom_fields_checkbox} onChange={changeOptions} />
                                <label class="form-check-label align-baseline" for="supports_custom_fields_checkbox">Custom Fields</label>
                            </div>
                            <div>
                                <input class="form-check-input custom-checkbox" type="checkbox" value={options.supports_page_attributes_checkbox} id="supports_page_attributes_checkbox" name="supports_page_attributes_checkbox" checked={options.supports_page_attributes_checkbox} onChange={changeOptions} />
                                <label class="form-check-label align-baseline" for="supports_page_attributes_checkbox">Page Attributes (hierarchical must be true)</label>
                            </div>
                            <div>
                                <input class="form-check-input custom-checkbox" type="checkbox" value={options.supports_post_formats_checkbox} id="supports_post_formats_checkbox" name="supports_post_formats_checkbox" checked={options.supports_post_formats_checkbox} onChange={changeOptions} />
                                <label class="form-check-label align-baseline" for="supports_post_formats_checkbox">Post Formats</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="my-3">
                            <label for="exclude_from_search" className="form-label fw-semibold">Exclude From Search</label>
                            <select class="form-select" aria-label="Default select example" id="exclude_from_search" name="exclude_from_search" onChange={changeOptions}>
                                {options.exclude_from_search == 'true'
                                ? <><option value="false">No</option><option selected value="true">Yes</option></> 
                                : <><option selected value="false">No</option><option value="true">Yes</option></> }
                            </select>
                            <p>Posts of this type should be excluded from search results.</p>
                        </div>
                        <div class="my-3">
                            <label for="enable_export" className="form-label fw-semibold">Enable Export</label>
                            <select class="form-select" aria-label="Default select example" id="enable_export" name="enable_export" onChange={changeOptions}>
                                {options.enable_export == 'true'
                                ? <><option selected value="true">Yes</option><option value="false">No</option></>
                                : <><option value="true">Yes</option><option selected value="false">No</option></>
                                }
                            </select>
                            <p>Enables post type export.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="my-3">
                            <label for="enable_archives" className="form-label fw-semibold">Enable Archives</label>
                            <select class="form-select" aria-label="Default select example" id="enable_archives" name="enable_archives" onChange={changeOptions}>
                                {options.enable_archives == 'true'
                                ? <><option value="true" selected>Yes</option><option value="false">No</option></>
                                : <><option value="true">Yes</option><option selected value="false">No</option></>
                                }
                            </select>
                            <p>Enables post type archives. Post type key is used as defauly archive slug.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Supports