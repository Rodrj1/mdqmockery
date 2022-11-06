import { useNoteTools } from "../../../../features/Components/NoteTools/useNoteTools";
import NoteMakerCSS from "../NoteTools.module.scss";

interface NoteMakerProps {
  creatorMode: boolean;
  setCreatorMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const NoteMaker = ({ creatorMode, setCreatorMode }: NoteMakerProps) => {
  const {
    exitCreatorMode,
    handleTitle,
    handleDescription,
    handleBackground,
    bgColor,
    bgSelectorColor,
    fieldAlert,
    createNote,
  } = useNoteTools({ creatorMode, setCreatorMode });

  return (
    <div className={NoteMakerCSS.container}>
      <h2>CREATOR MODE</h2>

      <label htmlFor="setName">Set a title</label>
      <br />
      <textarea id="setName" placeholder={fieldAlert} onChange={handleTitle} />

      <br />

      <label htmlFor="desc">Set a description</label>
      <textarea
        id="desc"
        placeholder={fieldAlert}
        onChange={handleDescription}
      />

      <br />

      <div className={NoteMakerCSS.dropdown}>
        <button style={{ backgroundColor: bgSelectorColor, width: "200px" }}>
          {bgColor}
        </button>
        <div className={NoteMakerCSS.dropdownContent}>
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

      <button onClick={createNote}>Create Note</button>

      <button onClick={exitCreatorMode}>Exit Creator Mode</button>
    </div>
  );
};

export default NoteMaker;
