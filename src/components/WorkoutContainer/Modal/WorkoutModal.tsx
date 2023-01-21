import { useExercisesListsVisibility } from "../../../features/Components/WorkoutModal/useExercisesListsVisibility";
import { useAddExercises } from "../../../features/Components/WorkoutModal/useAddExercises";
import { exercises } from "../../../data/exercises";
import { exerciseProps } from "../../../types";
import ModalCSS from "./WorkoutModal.module.scss";

interface WorkoutModalProps {
  listedExercises: exerciseProps[];
  setListedExercises: React.Dispatch<React.SetStateAction<exerciseProps[]>>;
  handleShowModal: () => void;
}

const WorkoutModal = ({
  listedExercises,
  setListedExercises,
  handleShowModal,
}: WorkoutModalProps) => {
  const { isListVisible, handleListVisibility } = useExercisesListsVisibility();
  const { addNewExercise } = useAddExercises({
    listedExercises,
    setListedExercises,
    handleShowModal,
  });

  return (
    <div className={ModalCSS.container}>
      <button className={ModalCSS.quitButton} onClick={handleShowModal}>
        [X] QUIT
      </button>
      {exercises.map((bodyPart, index) => (
        <div key={index}>
          <button
            className={ModalCSS.containerButton}
            onClick={() => handleListVisibility(index)}
          >
            {Object.keys(bodyPart)}
          </button>
          <>
            {Object.entries(exercises[index]).map((bodyPartExercises) =>
              bodyPartExercises[1].map((exercise: string) => (
                <div key={exercise}>
                  {isListVisible[index].state && (
                    <button
                      className={ModalCSS.subButton}
                      onClick={() => addNewExercise(exercise)}
                    >
                      {exercise}
                    </button>
                  )}
                </div>
              ))
            )}
          </>
        </div>
      ))}
    </div>
  );
};

export default WorkoutModal;
