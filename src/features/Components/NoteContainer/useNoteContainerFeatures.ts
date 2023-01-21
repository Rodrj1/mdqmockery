import { useEffect, useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { Note } from "../../../types";

interface Props {
  setHeaderName: React.Dispatch<React.SetStateAction<string>>;
}

export const useNoteContainerFeatures = ({ setHeaderName }: Props) => {
  const [creatorMode, setCreatorMode] = useState<boolean>(false);
  const [editorMode, setEditorMode] = useState<boolean>(false);
  const [noteToEdit, setNoteToEdit] = useState<Note>({} as Note);

  const currentNotes = useAppSelector(
    (state) => state.reducers.currentNotes.notes
  );

  useEffect(() => {
    if (creatorMode == true) {
      setEditorMode(false);
    }
    if (editorMode == true) {
      setCreatorMode(false);
    }
  }, [creatorMode, editorMode]);

  useEffect(() => {
    setHeaderName("MDQ NOTE MAKER");
  }, []);

  return {
    creatorMode,
    setCreatorMode,
    editorMode,
    setEditorMode,
    noteToEdit,
    setNoteToEdit,
    currentNotes,
  };
};
