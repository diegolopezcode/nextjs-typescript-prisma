"use client";
import React, { createContext, useState } from "react";

export const NoteContext = createContext<{
  notes: any[];
  loadNotes: () => Promise<void>;
  addNote: (title: string, content: string) => Promise<void>;
}>({
  notes: [],
  loadNotes: async () => {},
  addNote: async (title: string, content: string) => {},
});

export const NoteProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<any[]>([]);

  const loadNotes = async () => {
    const res = await fetch("/api/notes");
    const data = await res.json();
    setNotes(data);
  };

  const addNote = async (title: string, content: string) => {
    const res = await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });
    const {resp} = await res.json();
    setNotes([...notes, resp]);
  };

  return (
    <NoteContext.Provider value={{ notes, loadNotes, addNote }}>
      {children}
    </NoteContext.Provider>
  );
};
