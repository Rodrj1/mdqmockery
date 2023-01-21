import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { addToNotes, editNote } from "../../ReduxStore/notes-slice";
import { v4 as uuid } from "uuid";
import { changeBackgroundSelectorColor } from "./changeBackgroundSelectorColor";
import { Note } from "../../../types";

interface Props {
  creatorMode?: boolean;
  setCreatorMode?: React.Dispatch<React.SetStateAction<boolean>>;
  editorMode?: boolean;
  setEditorMode?: React.Dispatch<React.SetStateAction<boolean>>;
  note?: Note;
}

export const useNoteTools = ({
  creatorMode,
  setCreatorMode,
  editorMode,
  setEditorMode,
  note,
}: Props) => {
  const [noteTitle, setNoteTitle] = useState<string>(
    note?.name ? note.name : ""
  );
  const [noteDescription, setNoteDescription] = useState<string>(
    note?.description ? note.description : ""
  );
  const [bgColor, setBgColor] = useState<string>("CHOOSE A BACKGROUND");
  const [bgSelectorColor, setBgSelectorColor] = useState<string>(
    note?.backgroundColor ? note.backgroundColor : ""
  );
  const [fieldAlert, setFieldAlert] = useState<string>("");

  const dispatch = useAppDispatch();

  const createNote = () => {
    if (
      noteDescription != "" &&
      noteTitle != "" &&
      bgColor != "CHOOSE A BACKGROUND"
    ) {
      if (creatorMode == true) {
        if (setCreatorMode) {
          setCreatorMode(false);
          dispatch(
            addToNotes({
              name: noteTitle,
              description: noteDescription,
              backgroundColor: bgColor,
              id: uuid(),
            })
          );
        }
      }
    } else {
      setFieldAlert("FILL THIS FIELD");
      setBgSelectorColor(
        bgColor == "CHOOSE A BACKGROUND" ? "red" : bgSelectorColor
      );
    }
  };

  const editCurrentNote = () => {
    if (editorMode == true) {
      if (setEditorMode && note?.id) {
        setEditorMode(false);
        dispatch(
          editNote({
            name: noteTitle,
            description: noteDescription,
            id: note.id,
            backgroundColor: bgColor,
          })
        );
      }
    }
  };

  useEffect(() => {
    changeBackgroundSelectorColor(bgColor, setBgSelectorColor);
  }, [bgColor]);

  return {
    createNote,
    editCurrentNote,
    noteTitle,
    noteDescription,
    bgColor,
    bgSelectorColor,
    setNoteTitle,
    setNoteDescription,
    setBgColor,
    fieldAlert,
  };
};
