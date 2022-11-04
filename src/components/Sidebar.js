import React from 'react'

const Sidebar = () => {
    return (
        /* app-sidebar */
        <div className="app-sidebar">
            {/* app-sidebar-header */}
            <div className="app-sidebar-header">
                {/* Title */}
                <h1>Notes</h1>
                {/* Button */}
                <button>Add</button>
            </div>
            {/* app-sidebar-notes */}
            <div className="app-sidebar-notes">
                {/* app-sidebar-note */}
                <div className="app-sidebar-note">
                    {/* sidebar-note-title */}
                    <div className="sidebar-note-title">
                        {/* Title */}
                        <strong>Title</strong>
                        {/* Delete */}
                        <button>Delete</button>
                    </div>
                    <p>Note Preview</p>
                    {/* note-meta */}
                    <small className="note-meta">
                        Last modified [date]
                    </small>
                </div>
            </div>
        </div>
    )
}

export default Sidebar