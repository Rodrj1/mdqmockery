import { useAppDispatch } from "../../../app/hooks";
import { useEffect, useState } from "react";
import { removeFromNotes } from "../../../features/ReduxStore/notes-slice";
import NoteCSS from "./Note.module.scss";
import { useNoteFeatures } from "../../../features/Components/Note/useNoteFeatures";

interface NoteProps {
  note: {
    name: string;
    description: string;
    id: string;
    backgroundColor: string;
    currentEditMode: boolean;
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
    setNoteContent: React.Dispatch<
      React.SetStateAction<{
        name: string;
        description: string;
        id: string;
        backgroundColor: string;
      }>
    >;
  };
}

const Note = ({ note }: NoteProps) => {
  const { bgColor, deleteNote, editNote } = useNoteFeatures({ note });

  return (
    <>
      <br />
      <div className={`${NoteCSS.container} ${bgColor}`}>
        <h2>{note.name}</h2>

        <p>{note.description}</p>

        <button onClick={editNote}>EDIT NOTE</button>

        <button onClick={() => deleteNote(note.id)}>DELETE NOTE</button>
      </div>
    </>
  );
};

export default Note;
