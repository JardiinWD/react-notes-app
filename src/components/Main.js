import React from 'react'

const Main = () => {
    return (
        /* app-main */
        <div className="app-main">
            {/* app-main-note-edit */}
            <div className="app-main-note-edit">
                {/* title */}
                <input type="text" id='title' autoFocus />
                {/* body */}
                <textarea id='body' placeholder='Write your note here' />
            </div>
            {/* app-main-note-preview */}
            <div className="app-main-note-preview">
                {/* preview-title */}
                <h1 className="preview-title">Title</h1>
                {/* markdown-preview */}
                <div className="markdown-preview">
                    note preview
                </div>
            </div>
        </div>
    )
}

export default Main