import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { addToNotes, editNote } from "../../ReduxStore/notes-slice";
import { v4 as uuid } from "uuid";
import { changeBackgroundSelectorColor } from "./changeBackgroundSelectorColor";

interface Props {
  creatorMode?: boolean;
  setCreatorMode?: React.Dispatch<React.SetStateAction<boolean>>;
  editorMode?: boolean;
  setEditorMode?: React.Dispatch<React.SetStateAction<boolean>>;
  name?: string;
  description?: string;
  backgroundColor?: string;
  id?: string;
}

export const useNoteTools = ({
  creatorMode,
  setCreatorMode,
  editorMode,
  setEditorMode,
  name,
  description,
  backgroundColor,
  id,
}: Props) => {
  const [noteTitle, setNoteTitle] = useState<string>(name ? name : "");

  const [noteDescription, setNoteDescription] = useState<string>(
    description ? description : ""
  );

  const [bgColor, setBgColor] = useState<string>("CHOOSE A BACKGROUND");

  const [bgSelectorColor, setBgSelectorColor] = useState<string>(
    backgroundColor ? backgroundColor : ""
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

  const exitCreatorMode = () => {
    if (setCreatorMode) setCreatorMode(false);
  };

  const editCurrentNote = () => {
    if (editorMode == true) {
      if (setEditorMode && id) {
        setEditorMode(false);
        dispatch(
          editNote({
            name: noteTitle,
            description: noteDescription,
            id: id,
            backgroundColor: bgColor,
          })
        );
      }
    }
  };

  const exitEditorMode = () => {
    if (setEditorMode) setEditorMode(false);
  };

  const handleTitle = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNoteTitle(e.target.value);
  };

  const handleDescription = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNoteDescription(e.target.value);
  };

  const handleBackground = (color: string) => {
    setBgColor(color);
  };

  useEffect(() => {
    changeBackgroundSelectorColor(bgColor, setBgSelectorColor);
  }, [bgColor]);

  return {
    createNote,
    editCurrentNote,
    exitEditorMode,
    exitCreatorMode,
    handleTitle,
    handleDescription,
    handleBackground,
    noteTitle,
    noteDescription,
    bgColor,
    bgSelectorColor,
    fieldAlert,
  };
};
