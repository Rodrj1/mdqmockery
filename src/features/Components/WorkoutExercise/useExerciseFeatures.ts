import { useState } from "react";
import { exerciseProps, exerciseSetProps } from "../../../types";

interface Props {
  exercise: exerciseProps;
  listedExercises: exerciseProps[];
  setListedExercises: React.Dispatch<React.SetStateAction<exerciseProps[]>>;
}

export const useExerciseFeatures = ({
  exercise,
  listedExercises,
  setListedExercises,
}: Props) => {
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);
  const [currentSets, setCurrentSets] = useState<exerciseSetProps[]>(
    exercise.sets
  );
  const removeFromListedExercises = (exercise: string) => {
    const exercisesToKeep = listedExercises.filter(
      (exercises) => exercises.name != exercise
    );
    setListedExercises(exercisesToKeep);
  };

  const handleDeleteSet = (setId: number) => {
    const setsToKeep = currentSets.filter((set) => set.id != setId);
    setCurrentSets(setsToKeep);
    const findExercise = listedExercises.find(
      (listedExercise) => listedExercise.name == exercise.name
    );
    if (findExercise) {
      const filter = listedExercises.filter(
        (exercise) => exercise == findExercise
      );
      removeFromListedExercises(findExercise.name);
      setListedExercises((prev) => [
        {
          name: filter[0].name,
          sets: setsToKeep,
        },
        ...prev,
      ]);
    }
  };

  const handleAddSet = (exercise: string) => {
    if (reps != 0 && weight != 0) {
      setCurrentSets([
        ...currentSets,
        { id: currentSets.length, reps: reps, weight: weight },
      ]);

      const findExercise = listedExercises.find(
        (listedExercise) => listedExercise.name == exercise
      );
      if (findExercise) {
        const filter = listedExercises.filter(
          (exercise) => exercise == findExercise
        );
        removeFromListedExercises(findExercise.name);
        setListedExercises((prev) => [
          {
            name: filter[0].name,
            sets: filter[0].sets.concat({
              id: currentSets.length,
              reps: reps,
              weight: weight,
            }),
          },
          ...prev,
        ]);
      }
    }
  };
  return {
    currentSets,
    setReps,
    setWeight,
    handleDeleteSet,
    handleAddSet,
  };
};
