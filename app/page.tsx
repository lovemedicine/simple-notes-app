'use client'

import { useState } from 'react'
import Head from 'next/head'
import AddNoteForm from './components/AddNoteForm'
import NoteList, { Note } from './components/NoteList'

const exampleNotes: Note[] = [
  {
    id: 1,
    createdAt: "2023-07-11",
    text: "Patient presented with abdominal pain and nausea. Performed physical examination and ordered blood tests and ultrasound to assess for possible appendicitis.",
  },
  {
    id: 2,
    createdAt: "2023-07-02",
    text: "Follow-up for diabetes management. Reviewed blood glucose logs, adjusted medication dosage, and provided dietary recommendations."
  },
  {
    id: 3,
    createdAt: "2023-06-24",
    text: "Annual check-up. Vital signs within normal range. Conducted comprehensive physical exam, discussed age-appropriate screenings, and addressed patient's questions."
  }
]

let nextNoteId = 4

export default function Home() {
  let [notes, setNotes] = useState<Note[]>(exampleNotes)
  let [query, setQuery] = useState<string>("")

  function addNote(text: string) {
    let date = new Date()
    let newNote = {
      id: nextNoteId++,
      createdAt: date.toISOString().split("T")[0],
      text
    }
    setNotes([newNote, ...notes])
  }

  function deleteNote(id: number) {
    setNotes(notes.filter(note => note.id !== id))
  }

  return (
    <>
      <Head>
        <title>Solace Notes</title>
      </Head>
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
