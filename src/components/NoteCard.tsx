import React, { useContext } from "react";
import { Note } from "../interfaces/Note";
import { NoteContext } from "@/context/NoteContext";

function NoteCard({ note }: { note: Note }) {
  const { deleteNote,setSelectedNote } = useContext(NoteContext);
  return (
    <div
      key={note.id}
      className="bg-slate-300 border border-gray-200 rounded-md shadow-md p-4 w-full sm:w-2/4 my-4 flex justify-between"
    >
      <div>
        <h2 className="text-2xl font-bold">
          {note.id}. {note.title}
        </h2>
        <p>{note.content}</p>
      </div>
      <div className="flex gap-x-2">
        <button
          onClick={async () => {
            deleteNote(Number(note.id));
          }}
        >
          Delete
        </button>
        <button
        onClick={async () => {
            setSelectedNote(note);
        }}
        >Edit</button>
      </div>
    </div>
  );
}

export default NoteCard;
