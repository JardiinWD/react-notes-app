import React from 'react'

const Main = ({ activeNote, onUpdateNote }) => {

    // onEditField Handler fn
    const onEditField = (key, value) => {
        // I have invoked the updateNote fn
        onUpdateNote(
            {
                ...activeNote, // Take the old value
                [key]: value, // The new title/body of the modified note
                lastModified: Date.now(), // When was the last time that user modified the note
            }
        )
    }

    // Check if there isn't selected an active note
    if (!activeNote) {
        return (
            <div className="no-active-note">
                No note selected
            </div>
        )
    }

    return (
        /* app-main */
        <div className="app-main">
            {/* app-main-note-edit */}
            <div className="app-main-note-edit">
                {/* title */}
                <input
                    type="text"
                    id="title"
                    value={activeNote.title}
                    onChange={(e) => onEditField("title", e.target.value)}
                    autoFocus
                />
                {/* body */}
                <textarea
                    id='body'
                    placeholder='Write your note here'
                    value={activeNote.body}
                    onChange={(e) => onEditField("body", e.target.value)}
                />
            </div>
            {/* app-main-note-preview */}
            <div className="app-main-note-preview">
                {/* preview-title */}
                <h1 className="preview-title">{activeNote.title}</h1>
                {/* markdown-preview */}
                <div className="markdown-preview">
                    {activeNote.body}
                </div>
            </div>
        </div>
    )
}

export default Main