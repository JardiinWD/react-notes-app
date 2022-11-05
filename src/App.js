import React, { useState } from 'react'; // Import React
import './App.css';  // Import Stylesheet
import Sidebar from './components/Sidebar';  // Import Sidebar Comp
import Main from './components/Main'; // Import Main Comp
import uuid from 'react-uuid'; // Import univoque ID

function App() {

  // useState method for notes
  const [notes, setNotes] = useState([])
  // useState method for Active notes
  const [activeNote, setActiveNote] = useState(false)


  // onAddNote Function
  const onAddNote = (event) => {
    event.preventDefault()
    // Create a new Object
    const newNote = {
      id: uuid(), // Univoque ID
      title: "Untitled Note", // Initial Title
      body: "", // Initial Body
      lastModified: Date.now(), // When was the last time that user modified the note
    }
    // Update the current state
    setNotes([newNote, ...notes])
  }

  /** OnDeleteNote function
   * 
   * @param {object} idToDelete // Item to delete
   */
  const onDeleteNote = (idToDelete) => {
    // Manage the current state, filtering the note id
    setNotes(notes.filter((note) => note.id !== idToDelete))
  }

  // Get the active note fn
  const getActiveNote = () => {
    // Find the correct note with the same ID equal to activeNote
    return notes.find((note) => note.id === activeNote)
  }

  // update the active note fn
  const onUpdateNote = (updatedNote) => {
    // Created a new variable for the updated note
    const updatedNotesArray = notes.map((note) => {
      // Check if the active note is equal to the single note
      // Then I have returned the param
      if (note.id === activeNote) return updatedNote

      // Standard return
      return note
    })

    // Manage the current states of notes, and I have updated with the new array of updated notes
    setNotes(updatedNotesArray)
  }

  return (
    <div className="App">
      {/* Sidebar Component */}
      <Sidebar
        notes={notes}
        onDeleteNote={onDeleteNote}
        onAddNote={onAddNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      {/* Main Component */}
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
