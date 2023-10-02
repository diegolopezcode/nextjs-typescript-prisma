"use client";
import NoteCard from "@/components/NoteCard";
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
        <NoteCard  note={note} key={note.id}/>
      ))}
  </div>
)}

export default HomePage;
