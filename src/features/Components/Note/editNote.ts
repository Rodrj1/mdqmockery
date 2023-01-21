import { Note } from "../../../types";

export const editNote = (
  note: Note,
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>,
  setNoteContent: React.Dispatch<React.SetStateAction<Note>>
) => {
  setEditMode(true);
  setNoteContent({
    name: note.name,
    description: note.description,
    id: note.id,
    backgroundColor: note.backgroundColor,
  });
};
