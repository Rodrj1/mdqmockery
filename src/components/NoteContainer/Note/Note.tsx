import { useNoteFeatures } from "../../../features/Components/Note";
import { Note } from "../../../types";
import { editNote } from "../../../features/Components/Note";
import NoteCSS from "./Note.module.scss";

interface NoteProps {
  note: Note;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  setNoteContent: React.Dispatch<React.SetStateAction<Note>>;
}

const NoteComponent = ({ note, setEditMode, setNoteContent }: NoteProps) => {
  const { bgColor, deleteNote } = useNoteFeatures(note);

  return (
    <>
      <br />
      <div className={`${NoteCSS.container} ${bgColor}`}>
        <h2>{note.name}</h2>

        <p>{note.description}</p>

        <button onClick={() => editNote(note, setEditMode, setNoteContent)}>
          EDIT NOTE
        </button>

        <button onClick={() => deleteNote(note.id)}>DELETE NOTE</button>
      </div>
    </>
  );
};

export default NoteComponent;
