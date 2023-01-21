import { useState } from "react";

export const useExercisesListsVisibility = () => {
  const [isListVisible, setIsListVisible] = useState([
    { id: 0, state: false },
    { id: 1, state: false },
    { id: 2, state: false },
    { id: 3, state: false },
  ]);

  const handleListVisibility = (index: number) => {
    const updateList = isListVisible.map((list) => {
      if (list.id == index) {
        return { ...list, state: !list.state };
      }
      return list;
    });
    setIsListVisible(updateList);
  };

  return {
    isListVisible, handleListVisibility
  }
};
