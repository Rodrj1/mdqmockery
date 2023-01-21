import { exerciseProps } from "../../../types";

interface Props {
  listedExercises: exerciseProps[];
  setListedExercises: React.Dispatch<React.SetStateAction<exerciseProps[]>>;
  handleShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useAddExercises = ({
  listedExercises,
  setListedExercises,
  handleShowModal,
}: Props) => {
  const addNewExercise = (newExercise: string) => {
    const exerciseIsListed = listedExercises.find(
      (exercise) => exercise.name == newExercise
    );
    if (!exerciseIsListed) {
      setListedExercises([...listedExercises, { name: newExercise, sets: [] }]);
      handleShowModal(false);
    } else {
      alert("Already Listed.");
    }
  };

  return {
    addNewExercise,
  };
};
