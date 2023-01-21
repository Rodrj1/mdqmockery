export const useNoteHandlers = () => {
  const handleTitle = (
    setNoteTitle: (value: React.SetStateAction<string>) => void,
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNoteTitle(e.target.value);
  };

  const handleDescription = (
    setNoteDescription: (value: React.SetStateAction<string>) => void,
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNoteDescription(e.target.value);
  };
  const handleBackground = (
    setBgColor: (value: React.SetStateAction<string>) => void,
    color: string
  ) => {
    setBgColor(color);
  };

  const handleEditorMode = (
    setEditorMode: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (setEditorMode) setEditorMode((current) => !current);
  };

  const handleCreatorMode = (
    setCreatorMode: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setCreatorMode((current) => !current);
  };
  
  return {
    handleEditorMode,
    handleCreatorMode,
    handleTitle,
    handleDescription,
    handleBackground,
  };
};
