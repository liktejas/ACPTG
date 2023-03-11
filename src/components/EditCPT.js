import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import { ProgressBar } from 'react-loader-spinner'
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
import ListCPT from './ListCPT'

const EditCPT = ({ cptKey }) => {

  const url = `${appLocalizer.apiURL}/acptg/v2/acptg_update_cpt`

  const fetchCPT = `${appLocalizer.apiURL}/acptg/v2/acptg_get_cpt_by_key`

  const [isListDisplayed, setIsListDisplayed] = useState(false)

  const [isLoading, setIsLoading] = useState(true)

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
    name_admin_bar: "Post Type",
    archives: "Item Archives",
    attributes: "Item Attributes",
    parent_item_colon: "Parent Item:",
    all_items: "All Items",
    add_new_item: "Add New Item",
    add_new: "Add New",
    new_item: "New Item",
    edit_item: "Edit Item",
    update_item: "Update Item",
    view_item: "View Item",
    view_items: "View Items",
    search_items: "Search Item",
    not_found: "Not Found",
    not_found_in_trash: "Not Found in Trash",
    featured_image: "Featured Image",
    set_featured_image: "Set Featured Image",
    remove_featured_image: "Remove Featured Image",
    use_featured_image: "Use as featured image",
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

  const checkSupports = (supports) => {
    const defaultSupports = {
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
    }

    for (let support of supports) {
      switch (support) {
        case 'title':
          defaultSupports.supports_title_checkbox = true
          break
        case 'editor':
          defaultSupports.supports_editor_checkbox = true
          break
        case 'excerpt':
          defaultSupports.supports_excerpt_checkbox = true
          break
        case 'author':
          defaultSupports.supports_author_checkbox = true
          break
        case 'thumbnail':
          defaultSupports.supports_thumbnail_checkbox = true
          break
        case 'comments':
          defaultSupports.supports_comments_checkbox = true
          break
        case 'trackbacks':
          defaultSupports.supports_trackbacks_checkbox = true
          break
        case 'revisions':
          defaultSupports.supports_revisions_checkbox = true
          break
        case 'custom-fields':
          defaultSupports.supports_custom_fields_checkbox = true
          break
        case 'page-attributes':
          defaultSupports.supports_page_attributes_checkbox = true
          break
        case 'post-formats':
          defaultSupports.supports_post_formats_checkbox = true
          break
      }
    }

    return defaultSupports

  }

  useEffect(() => {
    console.log(cptKey.slice(6))
    axios.post(fetchCPT, {
      cptKey
    }, {
      headers: {
        'content-type': 'application/json',
        'X-WP-NONCE': appLocalizer.nonce
      }
    })
      .then((res) => {
        console.log(res.data.option)
        const newData = res.data.option
        const editPostTypes = {
          post_type_key: cptKey.slice(6),
          name_singular: newData.label,
          name_plural: newData.labels.name,
          link_to_taxonomies: newData.taxonomies.toString(),
          hierarchical: newData.hierarchical.toString(),
          description_key: newData.description,
        }
        const editLabels = {
          add_new: newData.labels.add_new,
          add_new_item: newData.labels.add_new_item,
          all_items: newData.labels.all_items,
          archives: newData.labels.archives,
          attributes: newData.labels.attributes,
          edit_item: newData.labels.edit_item,
          featured_image: newData.labels.featured_image,
          filter_items_list: newData.labels.filter_items_list,
          insert_into_item: newData.labels.insert_into_item,
          items_list: newData.labels.items_list,
          items_list_navigation: newData.labels.items_list_navigation,
          menu_name: newData.labels.menu_name,
          name: newData.labels.name,
          name_admin_bar: newData.labels.name_admin_bar,
          new_item: newData.labels.new_item,
          not_found: newData.labels.not_found,
          not_found_in_trash: newData.labels.not_found_in_trash,
          parent_item_colon: newData.labels.parent_item_colon,
          remove_featured_image: newData.labels.remove_featured_image,
          search_items: newData.labels.search_items,
          set_featured_image: newData.labels.set_featured_image,
          singular_name: newData.labels.singular_name,
          update_item: newData.labels.update_item,
          uploaded_to_this_item: newData.labels.uploaded_to_this_item,
          use_featured_image: newData.labels.use_featured_image,
          view_item: newData.labels.view_item,
          view_items: newData.labels.view_items,
        }
        const editOptions = { ...checkSupports(newData.supports) }
        editOptions.exclude_from_search = newData.exclude_from_search.toString()
        editOptions.enable_export = newData.can_export.toString()
        editOptions.enable_archives = newData.has_archive.toString()
        const editVisibility = {
          visibility_public: newData.public.toString(),
          visibility_show_ui: newData.show_ui.toString(),
          visibility_is_show_in_admin_sidebar: newData.show_in_admin_bar.toString(),
          visibility_where_show_in_admin_sidebar: newData.menu_position.toString(),
          visibility_show_in_admin_bar: newData.show_in_admin_bar.toString(),
          visibility_show_in_nav_menu: newData.show_in_nav_menus.toString(),
        }
        editVisibility.visibility_admin_sidebar_icon = newData.menu_icon == undefined ? '' : newData.menu_icon
        const editQuery = {
          publicly_queryable: newData.publicly_queryable.toString(),
        }
        if (newData.query_var == undefined) {
          editQuery.custom_query = 'post_type'
          editQuery.query = 'false'
        }
        const editPermalink = {}
        if (newData.permalink == 'false') {
          setPermalink(permalink.permalink_rewrite = 'false')
        }
        if (newData.permalink == 'custom') {

          editPermalink.permalink_rewrite = 'custom'
          editPermalink.permalink_url_slug = newData.rewrite.slug
          editPermalink.permalink_use_url_slug = newData.rewrite.with_front
          editPermalink.permalink_pagination = newData.rewrite.pages
          editPermalink.permalink_feeds = newData.rewrite.feeds
          setPermalink(editPermalink)
        }

        const editCapabilities = {
          capabilities: "base",
          base_capability_type: "page",
          capability_read_post: "read_post",
          capability_read_private_post: "read_private_posts",
          capability_publish_posts: "publish_posts",
          capability_delete_posts: "delete_post",
          capability_edit_post: "edit_post",
          capability_edit_posts: "edit_posts",
          capability_edit_others_posts: "edit_others_posts",
        }

        if (newData.capability_type == 'post') {
          editCapabilities.base_capability_type = 'post'
        }

        if (typeof newData.capability_type != 'string') {
          editCapabilities.capabilities = 'custom'
          editCapabilities.capability_read_post = newData.capabilities.read_post
          editCapabilities.capability_read_private_post = newData.capabilities.read_private_posts
          editCapabilities.capability_publish_posts = newData.capabilities.publish_posts
          editCapabilities.capability_delete_posts = newData.capabilities.delete_post
          editCapabilities.capability_edit_post = newData.capabilities.edit_post
          editCapabilities.capability_edit_posts = newData.capabilities.edit_posts
          editCapabilities.capability_edit_others_posts = newData.capabilities.edit_others_posts
        }

        const editRest = {
          show_in_rest: "",
          rest_base: newData.rest_base,
          rest_controller_class: newData.rest_controller_class,
        }

        if (newData.show_in_rest == 'true') editRest.show_in_rest = 'true'
        if (newData.show_in_rest == 'false') editRest.show_in_rest = 'false'

        setPostTypes(editPostTypes)
        setLabels(editLabels)
        setOptions(editOptions)
        setVisibility(editVisibility)
        setQuery(editQuery)
        setCapabilities(editCapabilities)
        setRest(editRest)
        setIsLoading(false)
      })
  }, [])

  const getSupports = (...args) => {
    console.log(args)
    for (let support of args) {
      if (document.getElementById(support).checked == true) {
        options[support] = true
      } else {
        options[support] = false
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPostTypes({ ...postTypes, [e.target.name]: e.target.value })
    setLabels({ ...labels, [e.target.name]: e.target.value })
    setOptions({ ...options, [e.target.name]: e.target.value })
    setVisibility({ ...visibility, [e.target.name]: e.target.value })
    setQuery({ ...query, [e.target.name]: e.target.value })
    setPermalink({ ...permalink, [e.target.name]: e.target.value })
    setCapabilities({ ...capabilities, [e.target.name]: e.target.value })
    setRest({ ...rest, [e.target.name]: e.target.value })
    getSupports('supports_title_checkbox', 'supports_editor_checkbox', 'supports_excerpt_checkbox', 'supports_author_checkbox', 'supports_thumbnail_checkbox', 'supports_comments_checkbox', 'supports_trackbacks_checkbox', 'supports_revisions_checkbox', 'supports_custom_fields_checkbox', 'supports_page_attributes_checkbox', 'supports_post_formats_checkbox')
    console.log(options)
    const cpt_data = { postTypes, labels, options, visibility, query, permalink, capabilities, rest }

    axios.post(url, {
      ...cpt_data
    }, {
      headers: {
        'content-type': 'application/json',
        'X-WP-NONCE': appLocalizer.nonce
      }
    })
      .then((res) => {
        console.log(res)
        if (res.data.status == 200) {
          let timerInterval
          Swal.fire({
            title: 'CPT Updated Successfully!',
            html: 'Redirecting in <span></span> milliseconds.',
            timer: 2000,
            timerProgressBar: true,
            icon: 'success',
            didOpen: () => {
              Swal.showLoading()
              const span = Swal.getHtmlContainer().querySelector('span')
              timerInterval = setInterval(() => {
                span.textContent = Swal.getTimerLeft()
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
              location.href = `${appLocalizer.siteURL}wp-admin/admin.php?page=acptg-settings`
            }
          })
        } else {
          let timerInterval
          Swal.fire({
            title: 'Something Went Wrong!',
            html: 'Please Try Again',
            timer: 2000,
            timerProgressBar: true,
            icon: 'error',
            didOpen: () => {
              Swal.showLoading()
              const span = Swal.getHtmlContainer().querySelector('span')
              timerInterval = setInterval(() => {
                Swal.getTimerLeft()
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          }).then((result) => { })
        }
      })
  }

  return (
    <>
      {!isListDisplayed &&
        <div className="container">
          <h1 className="wp-heading-inline mb-3">Edit ACPT</h1>
          {isLoading && <div className="progress_loader">
            <ProgressBar
              height="100"
              width="100"
              ariaLabel="progress-bar-loading"
              wrapperStyle={{}}
              wrapperClass="progress-bar-wrapper"
              borderColor='#F4442E'
              barColor='#51E5FF'
              visible={true}
            />
          </div>}
          {!isLoading && <>
            <Tabs />
            <div class="tab-content" id="pills-tabContent">
              <PostTypes onPTChange={setPostTypes} postTypes={postTypes} />
              <Labels onLabelChange={setLabels} labels={labels} />
              <Supports onOptionsChange={setOptions} options={options} />
              <Visibility onVisibilityChange={setVisibility} visibility={visibility} />
              <Query onQueryChange={setQuery} query={query} />
              <Permalinks onPermalinkChange={setPermalink} permalink={permalink} />
              <Capabilities onCapabilitiesChange={setCapabilities} capabilities={capabilities} />
              <Rest onRestChange={setRest} rest={rest} />
            </div>
            <button onClick={handleSubmit} className="btn btn-success">Save Changes</button> &emsp;
            <button onClick={() => setIsListDisplayed(true)} className="btn btn-warning">Go Back</button>
          </>}

        </div>
      }
      {isListDisplayed && <ListCPT />}
    </>
  )
}

export default EditCPT