"use client";

import { NoteContext } from "@/context/NoteContext";
import { useContext, useEffect, useRef, useState } from "react";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const tiltle = useRef<HTMLInputElement | null>(null);
  const { addNote, selectedNote, setSelectedNote, updateNote } =
    useContext(NoteContext);

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setContent(selectedNote.content);
      tiltle.current?.focus();
    }
  }, [selectedNote]);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (!title || !content) return;
        if (selectedNote) {
          await updateNote(Number(selectedNote.id), { title, content });
          setSelectedNote(null);
        } else {
          await addNote({ title, content });
        }
        setTitle("");
        setContent("");
        tiltle.current?.focus();
      }}
    >
      <input
        type="text"
        name="title"
        autoFocus
        placeholder="titlte"
        className="w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none focus-ring-2 focus:ring-blue-600 my-2"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        ref={tiltle}
      />

      <textarea
        name="title"
        autoFocus
        placeholder="Content"
        className="w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none focus-ring-2 focus:ring-blue-600 my-2"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />

      <div className="flex justify-end gap-x-2">
        {selectedNote ? (
          <>
            <button
              className="px-5 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              type="submit"
            >
              Update
            </button>
            <button
              className="px-5 py-2 text-black bg-slate-400 rounded-md hover:bg-slate-700"
              onClick={() => {
                setTitle("");
                setContent("");
                setSelectedNote(null);
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            className="px-5 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            type="submit"
          >
            Create
          </button>
        )}
      </div>
    </form>
  );
};

export default NoteForm;
