import { useEffect } from "react";
import { useNoteContainerFeatures } from "../../features/Components/NoteContainer/useNoteContainerFeatures";
import Note from "./Note/Note";
import NoteMaker from "./NoteTools/NoteMaker/NoteMaker";
import NoteEditor from "./NoteTools/NoteEditor/NoteEditor";
import NoteContainerCSS from "./NoteContainer.module.scss";

interface Props {
  setHeaderName: React.Dispatch<React.SetStateAction<string>>;
}

const NoteContainer = ({ setHeaderName }: Props) => {
  const {
    creatorMode,
    setCreatorMode,
    editorMode,
    setEditorMode,
    noteToEdit,
    setNoteToEdit,
    currentNotes,
    handleCreatorMode,
  } = useNoteContainerFeatures();

  useEffect(() => {
    setHeaderName("MDQ NOTE MAKER");
  }, []);

  return (
    <div className={NoteContainerCSS.container}>
      {creatorMode && (
        <NoteMaker creatorMode={creatorMode} setCreatorMode={setCreatorMode} />
      )}

      {editorMode && (
        <NoteEditor
          editorMode={editorMode}
          setEditorMode={setEditorMode}
          name={noteToEdit.name}
          description={noteToEdit.description}
          backgroundColor={noteToEdit.backgroundColor}
          id={noteToEdit.id}
        />
      )}

      <button
        className={NoteContainerCSS.modalButton}
        onClick={handleCreatorMode}
      >
        ADD NOTE
      </button>

      <div className={NoteContainerCSS.notes}>
        {currentNotes
          .map((note) => (
            <Note
              key={note.id}
              note={{
                name: note.name,
                description: note.description,
                id: note.id,
                backgroundColor: note.backgroundColor,
                currentEditMode: editorMode,
                setEditMode: setEditorMode,
                setNoteContent: setNoteToEdit,
              }}
            />
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default NoteContainer;
