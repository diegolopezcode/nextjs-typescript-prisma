"use client";
import React, { createContext, useState } from "react";
import { AddNote, Note } from "../interfaces/Note";

export const NoteContext = createContext<{
  notes: Note[];
  loadNotes: () => Promise<void>;
  addNote: (note: AddNote) => Promise<void>;
  deleteNote: (id: number) => Promise<void>;
}>({
  notes: [],
  loadNotes: async () => {},
  addNote: async (note: AddNote) => {},
  deleteNote: async (id: number) => {},
});

export const NoteProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const loadNotes = async () => {
    const res = await fetch("/api/notes");
    const data = await res.json();
    setNotes(data);
  };

  const addNote = async (note: AddNote) => {
    const res = await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    const { resp } = await res.json();
    setNotes([...notes, resp]);
  };

  const deleteNote = async (id: number) => {
    const res = await fetch(`/api/notes/${id}`, {
      method: "DELETE",
    });
    setNotes(notes.filter((note) => String(note.id) !== String(id)));
  };

  const updateNote = async (id: number, note: AddNote) => {
    const res = await fetch(`/api/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    const { resp } = await res.json();
    setNotes([...notes, resp]);
  };

  return (
    <NoteContext.Provider value={{ notes, loadNotes, addNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
};
