import { useState } from 'react'

type AddNoteFormProps = {
  addNote: (text: string) => void
}

export default function AddNoteForm({ addNote }: AddNoteFormProps) {
  let [newNote, setNewNote] = useState<string>("")
  let [isValid, setIsValid] = useState<boolean>(true)

  function handleAddNoteClick() {
    if (newNote.length >= 20 && newNote.length <= 300) {
      addNote(newNote)
      setNewNote("")
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }

  return (
    <div className="mb-5">
      <textarea
        className="block p-5 mb-3 w-full text-gray-900 rounded-lg border border-gray-400"
        placeholder="Write a new note here..."
        onChange={event => setNewNote(event.target.value)}
        value={newNote}
        />
      <button
        className="inline-block p-2 bg-gray-300 rounded-md text-black border border-gray-400"
        onClick={handleAddNoteClick}>Add Note</button>
      { !isValid &&
        <div className="inline-block ml-5 text-red font-bold text-red-500">
          Notes must be between 20 and 300 characters long
        </div>
      }
    </div>
  )  
}