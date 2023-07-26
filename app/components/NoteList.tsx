export type Note = {
  id: number
  createdAt: string,
  text: string
}

type NoteListProps = {
  notes: Note[],
  query: string,
  deleteNote: (index: number) => void
}

export default function NoteList({ notes, query = "", deleteNote }: NoteListProps) {
  let filteredNotes = query.length === 0 ? 
    notes : 
    notes.filter(note => note.text.search(query.toLowerCase()) >= 0)
 
  return (
    <div>
      {filteredNotes.map(note => (
        <div key={note.id} className="p-5 mb-5 border border-gray-400 rounded-md bg-white text-black">
          <div>
            <span className="font-bold">{note.createdAt} &nbsp;</span>
            <button className="text-sm text-blue-700" onClick={() => deleteNote(note.id)}>delete</button>
          </div>
          <div>
            {note.text}
          </div>
        </div>
      ))}
    </div>
  )
}

