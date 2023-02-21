import React from 'react'

const Labels = ({onLabelChange, labels}) => {
    const changeLabels = (e) => {
        onLabelChange({...labels, [e.target.name] : e.target.value})
    }
    return (
        <>
            <div class="tab-pane fade" id="pills-labels" role="tabpanel" aria-labelledby="pills-labels-tab" tabindex="0">
                <div className="row">
                    <div className="col-md-3">
                        <div class="my-3">
                            <label for="menu_name" className="form-label fw-semibold">Menu Name</label>
                            <input type="text" className="form-control" name="menu_name" id="menu_name" value={labels.menu_name} onChange={changeLabels}/>
                        </div>
                        <div class="my-3">
                            <label for="admin_bar_name" className="form-label fw-semibold">Admin Bar Name</label>
                            <input type="text" className="form-control" name="admin_bar_name" id="admin_bar_name" value={labels.admin_bar_name} onChange={changeLabels}/>
                        </div>
                        <div class="my-3">
                            <label for="archives" className="form-label fw-semibold">Archives</label>
                            <input type="text" className="form-control" name="archives" id="archives" value={labels.archives} onChange={changeLabels}/>
                        </div>
                        <div class="my-3">
                            <label for="attributes" className="form-label fw-semibold">Attributes</label>
                            <input type="text" className="form-control" name="attributes" id="attributes" value={labels.attributes} onChange={changeLabels}/>
                        </div>
                        <div class="my-3">
                            <label for="parent_item" className="form-label fw-semibold">Parent Item</label>
                            <input type="text" className="form-control" name="parent_item" id="parent_item" value={labels.parent_item} onChange={changeLabels}/>
                        </div>
                        <div class="my-3">
                            <label for="all_items" className="form-label fw-semibold">All Items</label>
                            <input type="text" className="form-control" name="all_items" id="all_items" value={labels.all_items} onChange={changeLabels}/>
                        </div>
                        <div class="my-3">
                            <label for="add_new_item" className="form-label fw-semibold">Add New Item</label>
                            <input type="text" className="form-control" name="add_new_item" id="add_new_item" value={labels.add_new_item} onChange={changeLabels}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="my-3">
                            <label for="add_new" className="form-label fw-semibold">Add New</label>
                            <input type="text" className="form-control" name="add_new" id="add_new" value={labels.add_new} onChange={changeLabels}/>
                        </div>
                        <div class="my-3">
                            <label for="new_item" className="form-label fw-semibold">New Item</label>
                            <input type="text" className="form-control" name="new_item" id="new_item" value={labels.new_item} onChange={changeLabels}/>
                        </div>
                        <div class="my-3">
                            <label for="edit_item" className="form-label fw-semibold">Edit Item</label>
                            <input type="text" className="form-control" name="edit_item" id="edit_item" value={labels.edit_item} onChange={changeLabels}/>
                        </div>
                        <div class="my-3">
                            <label for="update_item" className="form-label fw-semibold">Update Item</label>
                            <input type="text" className="form-control" name="update_item" id="update_item" value={labels.update_item} onChange={changeLabels}/>
                        </div>
                        <div class="my-3">
                            <label for="view_item" className="form-label fw-semibold">View Item</label>
                            <input type="text" className="form-control" name="view_item" id="view_item" value={labels.view_item} onChange={changeLabels}/>
                        </div>
                        <div class="my-3">
                            <label for="view_items" className="form-label fw-semibold">View Items</label>
                            <input type="text" className="form-control" name="view_items" id="view_items" value={labels.view_items} onChange={changeLabels}/>
                        </div>
                        <div class="my-3">
                            <label for="search_item" className="form-label fw-semibold">Search Item</label>
                            <input type="text" className="form-control" name="search_item" id="search_item" value={labels.search_item} onChange={changeLabels}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="my-3">
                            <label for="not_found" className="form-label fw-semibold">Not Found</label>
                            <input type="text" className="form-control" name="not_found" id="not_found" value={labels.not_found} onChange={changeLabels}/>
                        </div>
                        <div class="my-3">
                            <label for="not_found_in_trash" className="form-label fw-semibold">Not Found in Trash</label>
                            <input type="text" className="form-control" name="not_found_in_trash" id="not_found_in_trash" value={labels.not_found_in_trash} onChange={changeLabels}/>
                        </div>
                        <div class="my-3">
                            <label for="featured_image" className="form-label fw-semibold">Featured Image</label>
                            <input type="text" className="form-control" name="featured_image" id="featured_image" value={labels.featured_image} onChange={changeLabels}/>
                        </div>
                        <div class="my-3">
                            <label for="set_featured_image" className="form-label fw-semibold">Set Featured Image</label>
                            <input type="text" className="form-control" name="set_featured_image" id="set_featured_image" value={labels.set_featured_image} onChange={changeLabels}/>
                        </div>
                        <div class="my-3">
                            <label for="remove_featured_image" className="form-label fw-semibold">Remove Featured Image</label>
                            <input type="text" className="form-control" name="remove_featured_image" id="remove_featured_image" value={labels.remove_featured_image} onChange={changeLabels}/>
                        </div>
                        <div class="my-3">
                            <label for="use_as_featured_image" className="form-label fw-semibold">Use as featured image</label>
                            <input type="text" className="form-control" name="use_as_featured_image" id="use_as_featured_image" value={labels.use_as_featured_image} onChange={changeLabels}/>
                        </div>
                        <div class="my-3">
                            <label for="insert_into_item" className="form-label fw-semibold">Insert into item</label>
                            <input type="text" className="form-control" name="insert_into_item" id="insert_into_item" value={labels.insert_into_item} onChange={changeLabels}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="my-3">
                            <label for="uploaded_to_this_item" className="form-label fw-semibold">Uploaded to this item</label>
                            <input type="text" className="form-control" name="uploaded_to_this_item" id="uploaded_to_this_item" value={labels.uploaded_to_this_item} onChange={changeLabels}/>
                        </div>
                        <div class="my-3">
                            <label for="items_list" className="form-label fw-semibold">Items list</label>
                            <input type="text" className="form-control" name="items_list" id="items_list" value={labels.items_list} onChange={changeLabels}/>
                        </div>
                        <div class="my-3">
                            <label for="items_list_navigation" className="form-label fw-semibold">Items list navigation</label>
                            <input type="text" className="form-control" name="items_list_navigation" id="items_list_navigation" value={labels.items_list_navigation} onChange={changeLabels}/>
                        </div>
                        <div class="my-3">
                            <label for="filter_items_list" className="form-label fw-semibold">Filter items list</label>
                            <input type="text" className="form-control" name="filter_items_list" id="filter_items_list" value={labels.filter_items_list} onChange={changeLabels}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Labels