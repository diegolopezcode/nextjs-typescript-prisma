export interface Note {
    id: number;
    title: string;
    content: string;
}

export type AddNote = Omit<Note, 'id'>;