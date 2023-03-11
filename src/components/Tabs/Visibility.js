import React from 'react'

const Visibility = ({onVisibilityChange, visibility}) => {
    const changeVisibility = (e) => {
        onVisibilityChange({...visibility, [e.target.name] : e.target.value})
    }
    return (
        <>
            <div class="tab-pane fade" id="pills-visibility" role="tabpanel" aria-labelledby="pills-visibility-tab" tabindex="0">
                <div className="row">
                    <div className="col-md-4">
                        <div class="my-3">
                            <label for="visibility_public" className="form-label fw-semibold">Public</label>
                            <select class="form-select" id="visibility_public" name="visibility_public" aria-label="Default select example" onChange={changeVisibility}>
                            {visibility.visibility_public
                                ? <><option selected value="true">Yes</option>
                                <option value="false">No</option></>
                                : <><option value="true">Yes</option>
                                <option selected value="false">No</option></>}
                            </select>
                            <p>Show post type in the admin UI.</p>
                        </div>
                        <div class="my-3">
                            <label for="visibility_show_ui" className="form-label fw-semibold">Show UI</label>
                            <select class="form-select" id="visibility_show_ui" name="visibility_show_ui" aria-label="Default select example" onChange={changeVisibility}>
                                {visibility.visibility_show_ui 
                                ? <><option selected value="true">Yes</option>
                                <option value="false">No</option></> 
                                : <><option value="true">Yes</option>
                                <option selected value="false">No</option></>}
                                
                            </select>
                            <p>Show post type UI in the admin.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="my-3">
                            <label className="form-label fw-semibold">Show in Admin Sidebar</label>
                            <div className="row">
                                <div className="col-md-2">
                                    <select id="visibility_is_show_in_admin_sidebar" name="visibility_is_show_in_admin_sidebar" aria-label="Default select example" onChange={changeVisibility}>
                                        {visibility.visibility_is_show_in_admin_sidebar 
                                        ? <><option selected value="true">Yes</option>
                                        <option value="false">No</option></> 
                                        : <><option value="true">Yes</option>
                                        <option selected value="false">No</option></>}
                                    </select>
                                </div>
                                <div className="col-md-10">
                                    <select class="form-select" id="visibility_where_show_in_admin_sidebar" name="visibility_where_show_in_admin_sidebar" aria-label="Default select example" onChange={changeVisibility}>
                                        {visibility.visibility_where_show_in_admin_sidebar == "5" && 
                                        <>
                                            <option value="5" selected>5 - below Posts</option>
                                            <option value="10">10 - below Media</option>
                                            <option value="15">15 - below Links</option>
                                            <option value="20">20 - below Pages</option>
                                            <option value="25">25 - below Comments</option>
                                            <option value="60">60 - below first separator</option>
                                            <option value="65">65 - below Plugins</option>
                                            <option value="70">70 - below Users</option>
                                            <option value="75">75 - below Tools</option>
                                            <option value="80">80 - below Settings</option>
                                            <option value="100">100 - below second separator</option>
                                        </>}
                                        {visibility.visibility_where_show_in_admin_sidebar == "10" && 
                                        <>
                                            <option value="5">5 - below Posts</option>
                                            <option value="10" selected>10 - below Media</option>
                                            <option value="15">15 - below Links</option>
                                            <option value="20">20 - below Pages</option>
                                            <option value="25">25 - below Comments</option>
                                            <option value="60">60 - below first separator</option>
                                            <option value="65">65 - below Plugins</option>
                                            <option value="70">70 - below Users</option>
                                            <option value="75">75 - below Tools</option>
                                            <option value="80">80 - below Settings</option>
                                            <option value="100">100 - below second separator</option>
                                        </>}
                                        {visibility.visibility_where_show_in_admin_sidebar == "15" && 
                                        <>
                                            <option value="5">5 - below Posts</option>
                                            <option value="10">10 - below Media</option>
                                            <option value="15" selected>15 - below Links</option>
                                            <option value="20">20 - below Pages</option>
                                            <option value="25">25 - below Comments</option>
                                            <option value="60">60 - below first separator</option>
                                            <option value="65">65 - below Plugins</option>
                                            <option value="70">70 - below Users</option>
                                            <option value="75">75 - below Tools</option>
                                            <option value="80">80 - below Settings</option>
                                            <option value="100">100 - below second separator</option>
                                        </>}
                                        {visibility.visibility_where_show_in_admin_sidebar == "20" && 
                                        <>
                                            <option value="5">5 - below Posts</option>
                                            <option value="10">10 - below Media</option>
                                            <option value="15">15 - below Links</option>
                                            <option value="20" selected>20 - below Pages</option>
                                            <option value="25">25 - below Comments</option>
                                            <option value="60">60 - below first separator</option>
                                            <option value="65">65 - below Plugins</option>
                                            <option value="70">70 - below Users</option>
                                            <option value="75">75 - below Tools</option>
                                            <option value="80">80 - below Settings</option>
                                            <option value="100">100 - below second separator</option>
                                        </>}
                                        {visibility.visibility_where_show_in_admin_sidebar == "25" && 
                                        <>
                                            <option value="5">5 - below Posts</option>
                                            <option value="10">10 - below Media</option>
                                            <option value="15">15 - below Links</option>
                                            <option value="20">20 - below Pages</option>
                                            <option value="25" selected>25 - below Comments</option>
                                            <option value="60">60 - below first separator</option>
                                            <option value="65">65 - below Plugins</option>
                                            <option value="70">70 - below Users</option>
                                            <option value="75">75 - below Tools</option>
                                            <option value="80">80 - below Settings</option>
                                            <option value="100">100 - below second separator</option>
                                        </>}
                                        {visibility.visibility_where_show_in_admin_sidebar == "60" && 
                                        <>
                                            <option value="5">5 - below Posts</option>
                                            <option value="10">10 - below Media</option>
                                            <option value="15">15 - below Links</option>
                                            <option value="20">20 - below Pages</option>
                                            <option value="25">25 - below Comments</option>
                                            <option value="60" selected>60 - below first separator</option>
                                            <option value="65">65 - below Plugins</option>
                                            <option value="70">70 - below Users</option>
                                            <option value="75">75 - below Tools</option>
                                            <option value="80">80 - below Settings</option>
                                            <option value="100">100 - below second separator</option>
                                        </>}
                                        {visibility.visibility_where_show_in_admin_sidebar == "65" && 
                                        <>
                                            <option value="5">5 - below Posts</option>
                                            <option value="10">10 - below Media</option>
                                            <option value="15">15 - below Links</option>
                                            <option value="20">20 - below Pages</option>
                                            <option value="25">25 - below Comments</option>
                                            <option value="60">60 - below first separator</option>
                                            <option value="65" selected>65 - below Plugins</option>
                                            <option value="70">70 - below Users</option>
                                            <option value="75">75 - below Tools</option>
                                            <option value="80">80 - below Settings</option>
                                            <option value="100">100 - below second separator</option>
                                        </>}
                                        {visibility.visibility_where_show_in_admin_sidebar == "70" && 
                                        <>
                                            <option value="5">5 - below Posts</option>
                                            <option value="10">10 - below Media</option>
                                            <option value="15">15 - below Links</option>
                                            <option value="20">20 - below Pages</option>
                                            <option value="25">25 - below Comments</option>
                                            <option value="60">60 - below first separator</option>
                                            <option value="65">65 - below Plugins</option>
                                            <option value="70" selected>70 - below Users</option>
                                            <option value="75">75 - below Tools</option>
                                            <option value="80">80 - below Settings</option>
                                            <option value="100">100 - below second separator</option>
                                        </>}
                                        {visibility.visibility_where_show_in_admin_sidebar == "75" && 
                                        <>
                                            <option value="5">5 - below Posts</option>
                                            <option value="10">10 - below Media</option>
                                            <option value="15">15 - below Links</option>
                                            <option value="20">20 - below Pages</option>
                                            <option value="25">25 - below Comments</option>
                                            <option value="60">60 - below first separator</option>
                                            <option value="65">65 - below Plugins</option>
                                            <option value="70">70 - below Users</option>
                                            <option value="75" selected>75 - below Tools</option>
                                            <option value="80">80 - below Settings</option>
                                            <option value="100">100 - below second separator</option>
                                        </>}
                                        {visibility.visibility_where_show_in_admin_sidebar == "80" && 
                                        <>
                                            <option value="5">5 - below Posts</option>
                                            <option value="10">10 - below Media</option>
                                            <option value="15">15 - below Links</option>
                                            <option value="20">20 - below Pages</option>
                                            <option value="25">25 - below Comments</option>
                                            <option value="60">60 - below first separator</option>
                                            <option value="65">65 - below Plugins</option>
                                            <option value="70">70 - below Users</option>
                                            <option value="75">75 - below Tools</option>
                                            <option value="80" selected>80 - below Settings</option>
                                            <option value="100">100 - below second separator</option>
                                        </>}
                                        {visibility.visibility_where_show_in_admin_sidebar == "100" && 
                                        <>
                                            <option value="5">5 - below Posts</option>
                                            <option value="10">10 - below Media</option>
                                            <option value="15">15 - below Links</option>
                                            <option value="20">20 - below Pages</option>
                                            <option value="25">25 - below Comments</option>
                                            <option value="60">60 - below first separator</option>
                                            <option value="65">65 - below Plugins</option>
                                            <option value="70">70 - below Users</option>
                                            <option value="75">75 - below Tools</option>
                                            <option value="80">80 - below Settings</option>
                                            <option value="100" selected>100 - below second separator</option>
                                        </>}  
                                    </select>
                                </div>
                            </div>
                            <p>Show post type in admin sidebar.</p>
                        </div>
                        <div class="my-3">
                            <label for="visibility_admin_sidebar_icon" className="form-label fw-semibold">Admin Sidebar Icon</label>
                            <input type="text" className="form-control" id="visibility_admin_sidebar_icon" name="visibility_admin_sidebar_icon" value={visibility.visibility_admin_sidebar_icon} placeholder="i.e. dashicons-admin-post" onChange={changeVisibility} />
                            <p>Post type icon. Use dashicon name or full icon URL (http://.../icon.png).</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="my-3">
                            <label for="visibility_show_in_admin_bar" className="form-label fw-semibold">Show in Admin Bar</label>
                            <select class="form-select" id="visibility_show_in_admin_bar" name="visibility_show_in_admin_bar" aria-label="Default select example" onChange={changeVisibility}>
                                {visibility.visibility_show_in_admin_bar 
                                ? <><option selected value="true">Yes</option>
                                <option value="false">No</option></> 
                                : <><option value="true">Yes</option>
                                <option selected value="false">No</option></>}
                            </select>
                            <p>Show post type in admin bar.</p>
                        </div>
                        <div class="my-3">
                            <label for="visibility_show_in_nav_menu" className="form-label fw-semibold">Show in Navigation Menus</label>
                            <select class="form-select" id="visibility_show_in_nav_menu" name="visibility_show_in_nav_menu" aria-label="Default select example" onChange={changeVisibility}>
                                {visibility.visibility_show_in_nav_menu 
                                ? <><option selected value="true">Yes</option>
                                <option value="false">No</option></> 
                                : <><option value="true">Yes</option>
                                <option selected value="false">No</option></>}   
                            </select>
                            <p>Show post type in Navigation Menus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Visibility