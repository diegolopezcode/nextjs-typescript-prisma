"use client";
import NoteForm from "@/components/NoteForm"
import { NoteContext } from "@/context/NoteContext"
import { useContext, useEffect } from "react"


const HomePage = () => {
  const {notes,loadNotes} = useContext(NoteContext)
  useEffect(() => {
    loadNotes()  
  }, [])
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <NoteForm/>

      {
        notes.map((note)=>(
          <div key={note.id}
          className="bg-slate-300 border border-gray-200 rounded-md shadow-md p-4 w-full sm:w-2/4 my-4"
          >
            <h2>{note.id}. {note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
    </div>
  );
}

export default HomePage;
