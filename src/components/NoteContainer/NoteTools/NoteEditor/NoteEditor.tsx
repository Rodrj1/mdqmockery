import { useNoteTools } from "../../../../features/Components/NoteTools/useNoteTools";
import NoteEditorCSS from "../NoteTools.module.scss";

interface Props {
  editorMode: boolean;
  setEditorMode: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  description: string;
  id: string;
  backgroundColor: string;
}

const NoteEditor = ({
  editorMode,
  setEditorMode,
  name,
  description,
  id,
  backgroundColor,
}: Props) => {
  const {
    exitEditorMode,
    handleTitle,
    handleDescription,
    handleBackground,
    bgColor,
    noteTitle,
    noteDescription,
    bgSelectorColor,
    editCurrentNote,
  } = useNoteTools({
    editorMode,
    setEditorMode,
    name,
    description,
    id,
    backgroundColor,
  });

  return (
    <div className={NoteEditorCSS.container}>
      <h2>EDITOR MODE</h2>

      <label htmlFor="name">Update your title</label>
      <textarea id="name" onChange={handleTitle} value={noteTitle} />

      <br />

      <label htmlFor="description">Update your description</label>
      <textarea
        id="description"
        onChange={handleDescription}
        value={noteDescription}
      />

      <br />

      <div className={NoteEditorCSS.dropdown}>
        <button style={{ backgroundColor: bgSelectorColor, width: "200px" }}>
          {bgColor}
        </button>
        <div className={NoteEditorCSS.dropdownContent}>
          <button onClick={() => handleBackground("Pink")}>Pink</button>

          <button onClick={() => handleBackground("Light Green")}>
            Light Green
          </button>

          <button onClick={() => handleBackground("Light Grey")}>
            Light Grey
          </button>
        </div>
      </div>

      <br />

      <button onClick={editCurrentNote}>Confirm Changes</button>

      <button onClick={exitEditorMode}>Exit Editor Mode</button>
    </div>
  );
};

export default NoteEditor;
