import setExerciseCSS from "./Set.module.scss";

interface Props {
  id: number;
  setNumber: number;
  deleteSet: (id: number) => void;
  reps?: number;
  weight?: number;
}

const Set = ({ id, setNumber, deleteSet, reps, weight }: Props) => {
  return (
    <article className={setExerciseCSS.set}>
      <h2 className={setExerciseCSS.setItem}>Set {setNumber + 1}</h2>

      <h3 className={setExerciseCSS.setItem}>REPS</h3>
      <p className={setExerciseCSS.setItem}>{reps}</p>

      <h3 className={setExerciseCSS.setItem}>WEIGHT</h3>
      <p className={setExerciseCSS.setItem}>{weight}</p>

      <button className="cart-button" onClick={() => deleteSet(id)}>
        [X]
      </button>
    </article>
  );
};

export default Set;
