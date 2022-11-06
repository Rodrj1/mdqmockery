import { useEffect } from "react";
import { useWorkoutFeatures } from "../../features/Components/WorkoutContainer/useWorkoutFeatures";
import Exercise from "./Exercise/Exercise";
import WorkoutModal from "./Modal/WorkoutModal";
import WorkoutCSS from "./WorkoutContainer.module.scss";

interface Props {
  setHeaderName: React.Dispatch<React.SetStateAction<string>>;
}

const WorkoutContainer = ({ setHeaderName }: Props) => {
  const {
    isModalShown,
    handleShowModal,
    listedExercises,
    setListedExercises,
    removeExercise,
  } = useWorkoutFeatures();

  useEffect(() => {
    setHeaderName("MDQ WORKOUT MAKER");
  }, []);

  return (
    <div className={WorkoutCSS.container}>
      {!isModalShown && (
        <button className={WorkoutCSS.modalButton} onClick={handleShowModal}>ADD AN EXERCISE</button>
      )}

      {isModalShown && (
        <WorkoutModal
          listedExercises={listedExercises}
          setListedExercises={setListedExercises}
          handleShowModal={handleShowModal}
        />
      )}

      <br />

      <section className={WorkoutCSS.exercisesContainer}>
        {listedExercises.map((exercise) => (
          <Exercise
            key={exercise.name}
            listedExercises={listedExercises}
            setListedExercises={setListedExercises}
            exercise={exercise}
            removeExercise={removeExercise}
          />
        ))}
      </section>
    </div>
  );
};

export default WorkoutContainer;
