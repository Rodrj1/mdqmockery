import { useNoteContainerFeatures } from "../../features/Components/NoteContainer";
import { useNoteHandlers } from "../../features/Components/NoteTools";
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
  } = useNoteContainerFeatures({ setHeaderName });

  const { handleCreatorMode } = useNoteHandlers();

  return (
    <div className={NoteContainerCSS.container}>
      {creatorMode && (
        <NoteMaker creatorMode={creatorMode} setCreatorMode={setCreatorMode} />
      )}

      {editorMode && (
        <NoteEditor
          editorMode={editorMode}
          setEditorMode={setEditorMode}
          note={noteToEdit}
        />
      )}

      <button
        className={NoteContainerCSS.modalButton}
        onClick={() => handleCreatorMode(setCreatorMode)}
      >
        ADD NOTE
      </button>

      <div className={NoteContainerCSS.notes}>
        {currentNotes
          .map((note) => (
            <Note
              key={note.id}
              note={note}
              setEditMode={setEditorMode}
              setNoteContent={setNoteToEdit}
            />
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default NoteContainer;
