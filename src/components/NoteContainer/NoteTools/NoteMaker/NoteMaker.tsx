import { useNoteHandlers } from "../../../../features/Components/NoteTools";
import { useNoteTools } from "../../../../features/Components/NoteTools";
import NoteMakerCSS from "../NoteTools.module.scss";

interface NoteMakerProps {
  creatorMode: boolean;
  setCreatorMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const NoteMaker = ({ creatorMode, setCreatorMode }: NoteMakerProps) => {
  const {
    bgColor,
    bgSelectorColor,
    fieldAlert,
    createNote,
    setNoteTitle,
    setNoteDescription,
    setBgColor,
  } = useNoteTools({ creatorMode, setCreatorMode });

  const {
    handleCreatorMode,
    handleTitle,
    handleDescription,
    handleBackground,
  } = useNoteHandlers();

  return (
    <div className={NoteMakerCSS.container}>
      <h2>CREATOR MODE</h2>

      <label htmlFor="setName">Set a title</label>
      <br />
      <textarea
        id="setName"
        placeholder={fieldAlert}
        onChange={(e) => handleTitle(setNoteTitle, e)}
      />

      <br />

      <label htmlFor="desc">Set a description</label>
      <textarea
        id="desc"
        placeholder={fieldAlert}
        onChange={(e) => handleDescription(setNoteDescription, e)}
      />

      <br />

      <div className={NoteMakerCSS.dropdown}>
        <button style={{ backgroundColor: bgSelectorColor, width: "200px" }}>
          {bgColor}
        </button>
        <div className={NoteMakerCSS.dropdownContent}>
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

      <button onClick={createNote}>Create Note</button>

      <button onClick={() => handleCreatorMode(setCreatorMode)}>
        Exit Creator Mode
      </button>
    </div>
  );
};

export default NoteMaker;
