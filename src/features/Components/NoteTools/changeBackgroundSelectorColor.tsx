export const changeBackgroundSelectorColor = (
  getBgColor: string,
  setBgSelectorColor: React.Dispatch<React.SetStateAction<string>>
) => {
  switch (getBgColor) {
    case "Pink":
      setBgSelectorColor("rgb(255, 56, 92)");
      break;
    case "Light Green":
      setBgSelectorColor("#4FA095");
      break;
    case "Light Grey":
      setBgSelectorColor("rgb(207, 205, 205)");
      break;
  }
};
