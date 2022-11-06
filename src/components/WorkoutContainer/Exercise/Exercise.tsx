import { useExerciseFeatures } from "../../../features/Components/WorkoutExercise/useExerciseFeatures";
import { exerciseProps } from "../../../types";
import Set from "../Set/Set";
import exerciseCSS from "./Exercise.module.scss";

interface Props {
  exercise: exerciseProps;
  listedExercises: exerciseProps[];
  setListedExercises: React.Dispatch<React.SetStateAction<exerciseProps[]>>;
  removeExercise: (exerciseToDelete: string) => void;
}

const Exercise = ({
  listedExercises,
  setListedExercises,
  exercise,
  removeExercise,
}: Props) => {
  const { setReps, setWeight, handleDeleteSet, handleAddSet, currentSets } =
    useExerciseFeatures({
      exercise,
      listedExercises,
      setListedExercises,
    });

  const handleSetInfo = (
    e: React.ChangeEvent<HTMLInputElement>,
    setInfo: React.Dispatch<React.SetStateAction<number>>
  ) => {
    setInfo(parseInt(e.target.value));
  };

  return (
    <article className={exerciseCSS.container}>
      <div className={exerciseCSS.setMenu}>
        <h2 className={exerciseCSS.setMenuItem}>
          {exercise.name.toLocaleUpperCase()}
        </h2>

        <div className={exerciseCSS.setMenuItem}>
          <button onClick={() => removeExercise(exercise.name)}>
            REMOVE EXERCISE
          </button>
        </div>

        <div className={exerciseCSS.setMenuItem}>
          <h3>REPS</h3>
          <input
            type="number"
            onChange={(e) => handleSetInfo(e, setReps)}
          ></input>
        </div>

        <div className={exerciseCSS.setMenuItem}>
          <h3>WEIGHT</h3>
          <input
            type="number"
            onChange={(e) => handleSetInfo(e, setWeight)}
          ></input>
        </div>

        <div className={exerciseCSS.setMenuItem}>
          <button onClick={() => handleAddSet(exercise.name)}>
            ADD NEW SET
          </button>
        </div>
      </div>

      {currentSets.map((set, index) => (
        <Set
          key={index}
          setNumber={index}
          id={set.id}
          deleteSet={handleDeleteSet}
          reps={exercise.sets[index]?.reps}
          weight={exercise.sets[index]?.weight}
        />
      ))}
    </article>
  );
};

export default Exercise;
