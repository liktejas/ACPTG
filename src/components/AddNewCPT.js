import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Tabs from './Tabs'
import PostTypes from './Tabs/PostTypes'
import Labels from './Tabs/Labels'
import Supports from './Tabs/Supports'
import Visibility from './Tabs/Visibility'
import Query from './Tabs/Query'
import Permalinks from './Tabs/Permalinks'
import Capabilities from './Tabs/Capabilities'
import Rest from './Tabs/Rest'

const AddNewCPT = () => {

  const url = `${appLocalizer.apiURL}/acptg/v2/acptg_save_cpt`

  const [postTypes, setPostTypes] = useState({
    post_type_key: "post_key",
    description_key: "Post Type Description",
    name_singular: "Post Type",
    name_plural: "Post Types",
    link_to_taxonomies: "category,post_tag",
    hierarchical: "false",
  })

  const [labels, setLabels] = useState({
    menu_name: "Post Types",
    admin_bar_name: "Post Type",
    archives: "Item Archives",
    attributes: "Item Attributes",
    parent_item: "Parent Item:",
    all_items: "All Items",
    add_new_item: "Add New Item",
    add_new: "Add New",
    new_item: "New Item",
    edit_item: "Edit Item",
    update_item: "Update Item",
    view_item: "View Item",
    view_items: "View Items",
    search_item: "Search Item",
    not_found: "Not Found",
    not_found_in_trash: "Not Found in Trash",
    featured_image: "Featured Image",
    set_featured_image: "Set Featured Image",
    remove_featured_image: "Remove Featured Image",
    use_as_featured_image: "Use as featured image",
    insert_into_item: "Insert into item",
    uploaded_to_this_item: "Uploaded to this item",
    items_list: "Items list",
    items_list_navigation: "Items list navigation",
    filter_items_list: "Filter items list",
  })

  const [options, setOptions] = useState({
    supports_title_checkbox: true,
    supports_editor_checkbox: true,
    supports_excerpt_checkbox: false,
    supports_author_checkbox: false,
    supports_thumbnail_checkbox: false,
    supports_comments_checkbox: false,
    supports_trackbacks_checkbox: false,
    supports_revisions_checkbox: false,
    supports_custom_fields_checkbox: false,
    supports_page_attributes_checkbox: false,
    supports_post_formats_checkbox: false,
    exclude_from_search: "false",
    enable_export: "true",
    enable_archives: "true",
    custom_archive_slug: "",
  })

  const [visibility, setVisibility] = useState({
    visibility_public: 'true',
    visibility_show_ui: 'true',
    visibility_is_show_in_admin_sidebar: 'true',
    visibility_where_show_in_admin_sidebar: "5",
    visibility_admin_sidebar_icon: "",
    visibility_show_in_admin_bar: 'true',
    visibility_show_in_nav_menu: 'true',
  })

  const [query, setQuery] = useState({
    query: 'false',
    publicly_queryable: 'true',
    custom_query: "post_type",
  })

  const [permalink, setPermalink] = useState({
    permalink_rewrite: "true",
    permalink_url_slug: "post_type",
    permalink_use_url_slug: "true",
    permalink_pagination: "true",
    permalink_feeds: "true",
  })

  const [capabilities, setCapabilities] = useState({
    capabilities: "base",
    base_capability_type: "page",
    capability_read_post: "read_post",
    capability_read_private_post: "read_private_posts",
    capability_publish_posts: "publish_posts",
    capability_delete_posts: "delete_post",
    capability_edit_post: "edit_post",
    capability_edit_posts: "edit_posts",
    capability_edit_others_posts: "edit_others_posts",
  })

  const [rest, setRest] = useState({
    show_in_rest: "",
    rest_base: "",
    rest_controller_class: "",
  })

  const getSupports = (...args) => {
    console.log(args)
    for(let support of args) {
      if(document.getElementById(support).checked == true) {
        options[support] = true
        // console.log(support, options[support])
      } else {
        options[support] = false
        // console.log(support, options[support])
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPostTypes({...postTypes, [e.target.name]:e.target.value})
    setLabels({...labels, [e.target.name]:e.target.value})
    setOptions({...options, [e.target.name]:e.target.value})
    setVisibility({...visibility, [e.target.name]:e.target.value})
    setQuery({...query, [e.target.name]:e.target.value})
    setPermalink({...permalink, [e.target.name]:e.target.value})
    setCapabilities({...capabilities, [e.target.name]:e.target.value})
    setRest({...rest, [e.target.name]:e.target.value})
    getSupports('supports_title_checkbox','supports_editor_checkbox','supports_excerpt_checkbox','supports_author_checkbox','supports_thumbnail_checkbox','supports_comments_checkbox','supports_trackbacks_checkbox','supports_revisions_checkbox','supports_custom_fields_checkbox','supports_page_attributes_checkbox','supports_post_formats_checkbox')
    console.log(options)
    const cpt_data = {postTypes, labels, options, visibility, query, permalink, capabilities, rest}

    axios.post( url, {
      ...cpt_data
    }, {
      headers: {
        'content-type': 'application/json',
        'X-WP-NONCE': appLocalizer.nonce
      }
    })
    .then((res) => console.log(res) )

  }

  return (
    <>
      <div className="container">
        <h1 className="wp-heading-inline mb-3">Add New ACPT</h1>
        <Tabs />
        <div class="tab-content" id="pills-tabContent">
          <PostTypes onPTChange={setPostTypes} postTypes={postTypes} />
          <Labels onLabelChange={setLabels} labels={labels} />
          <Supports onOptionsChange={setOptions} options={options} />
          <Visibility onVisibilityChange={setVisibility} visibility={visibility} />
          <Query onQueryChange={setQuery} query={query}/>
          <Permalinks onPermalinkChange={setPermalink} permalink={permalink} />
          <Capabilities onCapabilitiesChange={setCapabilities} capabilities={capabilities} />
          <Rest onRestChange={setRest} rest={rest} />
        </div>
        <button onClick={handleSubmit} className="btn btn-success">Save Changes</button>
      </div>
    </> 
  )
}

export default AddNewCPT