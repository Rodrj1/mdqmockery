import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { removeFromNotes } from "../../ReduxStore/notes-slice";
import NoteCSS from "../../../components/NoteContainer/Note/Note.module.scss";

interface Props {
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

export const useNoteFeatures = ({ note }: Props) => {
  const [bgColor, setBgColor] = useState<string>();

  const dispatch = useAppDispatch();

  const deleteNote = (noteId: string) => {
    dispatch(removeFromNotes(noteId));
  };

  const editNote = () => {
    note.setEditMode(true);
    note.setNoteContent({
      name: note.name,
      description: note.description,
      id: note.id,
      backgroundColor: note.backgroundColor,
    });
  };

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
    editNote,
  };
};
