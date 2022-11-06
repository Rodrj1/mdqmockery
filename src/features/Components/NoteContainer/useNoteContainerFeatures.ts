import { useEffect, useState } from "react";
import { useAppSelector } from "../../../app/hooks";

export const useNoteContainerFeatures = () => {
  const [creatorMode, setCreatorMode] = useState<boolean>(false);

  const [editorMode, setEditorMode] = useState<boolean>(false);
  const [noteToEdit, setNoteToEdit] = useState({
    name: "",
    description: "",
    id: "",
    backgroundColor: "",
  });

  const currentNotes = useAppSelector((state) => state.reducers.currentNotes.notes);

  const handleCreatorMode = () => {
    if (creatorMode == false) setCreatorMode(true);
  };

  useEffect(() => {
    if (creatorMode == true) {
      setEditorMode(false);
    }
    if (editorMode == true) {
      setCreatorMode(false);
    }
  }, [creatorMode, editorMode]);

  return {
    creatorMode,
    setCreatorMode,
    editorMode,
    setEditorMode,
    noteToEdit,
    setNoteToEdit,
    currentNotes,
    handleCreatorMode,
  };
};
