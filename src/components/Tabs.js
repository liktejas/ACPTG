import React from 'react'

const Tabs = () => {
    return (
        <>
            <ul class="nav nav-pills nav-fill" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-posttype-tab" data-bs-toggle="pill" data-bs-target="#pills-posttype" type="button" role="tab" aria-controls="pills-posttype" aria-selected="true">Post Type</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-labels-tab" data-bs-toggle="pill" data-bs-target="#pills-labels" type="button" role="tab" aria-controls="pills-labels" aria-selected="false">Labels</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-options-tab" data-bs-toggle="pill" data-bs-target="#pills-options" type="button" role="tab" aria-controls="pills-options" aria-selected="false">Options</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-visibility-tab" data-bs-toggle="pill" data-bs-target="#pills-visibility" type="button" role="tab" aria-controls="pills-visibility" aria-selected="false">Visibility</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-query-tab" data-bs-toggle="pill" data-bs-target="#pills-query" type="button" role="tab" aria-controls="pills-query" aria-selected="false">Query</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-permalinks-tab" data-bs-toggle="pill" data-bs-target="#pills-permalinks" type="button" role="tab" aria-controls="pills-permalinks" aria-selected="false">Permalinks</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-capabilities-tab" data-bs-toggle="pill" data-bs-target="#pills-capabilities" type="button" role="tab" aria-controls="pills-capabilities" aria-selected="false">Capabilities</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-restapi-tab" data-bs-toggle="pill" data-bs-target="#pills-restapi" type="button" role="tab" aria-controls="pills-restapi" aria-selected="false">REST API</button>
                </li>
            </ul>
        </>
    )
}

export default Tabs