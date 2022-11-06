import { useEffect, useState } from "react";
import { exerciseProps } from "../../../types";
import { useLocalStorage } from "../../LocalStorage/useLocalStorage";

export const useWorkoutFeatures = () => {
  const { initialValue, setValueInStorage } = useLocalStorage("exercises");
  const [isModalShown, setIsModalShown] = useState(false);
  const [listedExercises, setListedExercises] =
    useState<exerciseProps[]>(initialValue);

  const handleShowModal = () => {
    setIsModalShown((current) => !current);
  };

  const removeExercise = (exerciseToDelete: string) => {
    const exercisesToKeep = listedExercises.filter(
      (exercise) => exercise.name != exerciseToDelete
    );
    setListedExercises(exercisesToKeep);
  };

  useEffect(() => {
    setValueInStorage("exercises", listedExercises);
  }, [listedExercises]);

  return {
    isModalShown,
    handleShowModal,
    listedExercises,
    setListedExercises,
    removeExercise,
  };
};
