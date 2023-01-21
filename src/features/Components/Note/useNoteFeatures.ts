import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { removeFromNotes } from "../../ReduxStore/notes-slice";
import { Note } from "../../../types";
import NoteCSS from "../../../components/NoteContainer/Note/Note.module.scss";

export const useNoteFeatures = (note: Note) => {
  const dispatch = useAppDispatch();

  const deleteNote = (noteId: string) => {
    dispatch(removeFromNotes(noteId));
  };

  const [bgColor, setBgColor] = useState<string>();
  useEffect(() => {
    switch (note.backgroundColor) {
      case "Pink":
        setBgColor(NoteCSS.pinkBg);
        break;
      case "Light Green":
        setBgColor(NoteCSS.lightGreenBg);
        break;
      case "Light Grey":
        setBgColor(NoteCSS.lightGreyBg);
        break;
    }
  }, [note.backgroundColor]);

  return {
    bgColor,
    deleteNote,
  };
};
