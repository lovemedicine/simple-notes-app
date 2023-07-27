'use client'

import { useEffect, useState } from 'react'
import AddNoteForm from './components/AddNoteForm'
import NoteList, { Note } from './components/NoteList'

export default function Home() {
  let [notes, setNotes] = useState<Note[]>([])
  let [query, setQuery] = useState<string>("")

  async function fetchNotes() {
    let response = await fetch('api')
    let json = await response.json()
    setNotes(json)
  }

  useEffect(() => {
    fetchNotes().catch(console.error)
  }, [])

  async function addNote(text: string) {
    await fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    }).catch(console.error)

    fetchNotes().catch(console.error)
  }

  async function deleteNote(id: number) {
    await fetch('/api', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    }).catch(console.error)

    fetchNotes().catch(console.error)
  }

  return (
    <>
      <h1 className="mb-5 text-3xl font-bold">Solace Notes</h1>

      <h3 className="text-2xl mb-3">New Note</h3>
      <AddNoteForm addNote={addNote} />

      <h3 className="text-2xl mb-3">Saved Notes</h3>
      <div className="mb-3">
        Search: &nbsp;<input 
          className="p-1 rounded-md border border-gray-400 text-black"
          value={query}
          onChange={event => setQuery(event.target.value)}
          placeholder="Enter search text here..."
          />
      </div>
      <NoteList notes={notes} query={query} deleteNote={deleteNote} />
    </>
  )
}
