import { useNoteTools } from "../../../../features/Components/NoteTools/useNoteTools";
import { Note } from "../../../../types";
import { useNoteHandlers } from "../../../../features/Components/NoteTools";
import NoteEditorCSS from "../NoteTools.module.scss";

interface Props {
  editorMode: boolean;
  setEditorMode: React.Dispatch<React.SetStateAction<boolean>>;
  note: Note;
}

const NoteEditor = ({ editorMode, setEditorMode, note }: Props) => {
  const {
    bgColor,
    noteTitle,
    noteDescription,
    bgSelectorColor,
    setNoteTitle,
    setNoteDescription,
    setBgColor,
    editCurrentNote,
  } = useNoteTools({
    editorMode,
    setEditorMode,
    note,
  });

  const { handleEditorMode, handleTitle, handleDescription, handleBackground } =
    useNoteHandlers();

  return (
    <div className={NoteEditorCSS.container}>
      <h2>EDITOR MODE</h2>

      <label htmlFor="name">Update your title</label>
      <textarea
        id="name"
        onChange={(e) => handleTitle(setNoteTitle, e)}
        value={noteTitle}
      />

      <br />

      <label htmlFor="description">Update your description</label>
      <textarea
        id="description"
        onChange={(e) => handleDescription(setNoteDescription, e)}
        value={noteDescription}
      />

      <br />

      <div className={NoteEditorCSS.dropdown}>
        <button style={{ backgroundColor: bgSelectorColor, width: "200px" }}>
          {bgColor}
        </button>
        <div className={NoteEditorCSS.dropdownContent}>
          <button onClick={() => handleBackground(setBgColor, "Pink")}>
            Pink
          </button>

          <button onClick={() => handleBackground(setBgColor, "Light Green")}>
            Light Green
          </button>

          <button onClick={() => handleBackground(setBgColor, "Light Grey")}>
            Light Grey
          </button>
        </div>
      </div>

      <br />

      <button onClick={editCurrentNote}>Confirm Changes</button>

      <button onClick={() => handleEditorMode(setEditorMode)}>
        Exit Editor Mode
      </button>
    </div>
  );
};

export default NoteEditor;
