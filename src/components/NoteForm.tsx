"use client";

import { NoteContext } from "@/context/NoteContext";
import { useContext, useState } from "react";

const NoteForm=() =>{
    const [title, setTitle ] = useState('')
    const [content, setContent ] = useState('')
    const {addNote} = useContext(NoteContext)
  return (
    <form onSubmit={async(e)=>{
        e.preventDefault()
        await addNote(title,content)
       
    }}>
      <input
        type="text"
        name="title"
        autoFocus
        placeholder="titlte"
        className="w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none focus-ring-2 focus:ring-blue-600 my-2"
        onChange={(e)=>setTitle(e.target.value)}
      />

      <textarea
        name="title"
        autoFocus
        placeholder="Content"
        className="w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none focus-ring-2 focus:ring-blue-600 my-2"
        onChange={(e)=>setContent(e.target.value)}
      />
      <button
      className="px-5 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >Create</button>
    </form>
  );
}

export default NoteForm;
