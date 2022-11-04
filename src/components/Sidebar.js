import React from 'react'

const Sidebar = ({ notes, onAddNote }) => {

    console.log(notes);

    return (
        /* app-sidebar */
        <div className="app-sidebar">
            {/* app-sidebar-header */}
            <div className="app-sidebar-header">
                {/* Title */}
                <h1>Notes</h1>
                {/* Button */}
                <button onClick={onAddNote}>Add</button>
            </div>
            {/* app-sidebar-notes */}
            <div className="app-sidebar-notes">
                {
                    notes.map(note => {
                        // Destructuring of Note
                        const { id, title, body, lastModified } = note
                        // Create the option for the dateTimeFormat
                        let option = {
                            year: 'numeric',
                            month: 'numeric',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            second: 'numeric',
                            hour12: false,
                        }
                        return (
                            /* app-sidebar-note */
                            <div key={id} className="app-sidebar-note">
                                {/* sidebar-note-title */}
                                <div className="sidebar-note-title">
                                    {/* Title */}
                                    <strong>{title}</strong>
                                    {/* Delete */}
                                    <button>Delete</button>
                                </div>
                                {/* Body with substring method */}
                                <p>{body && body.substring(0, 100)}...</p>
                                {/* note-meta */}
                                <small className="note-meta">
                                    {/* DateTimeFormat of lastModified */}
                                    Last modified {new Intl.DateTimeFormat('it-IT', option).format(lastModified)}
                                </small>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar