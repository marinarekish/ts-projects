import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import styles from "./AddForm.module.css";

export function AddForm() {
  function onSubmit() {
    console.log("Added");
  }

  return (
    <>
      <form className={styles.form}>
        <label>Recipe Name</label>
        <input type="text" required />
        <label>Link to the image</label>
        <input type="text" required />
        <label>Ingredients</label>
        <textarea cols={15} required></textarea>
        <label>Directions</label>
        <textarea cols={10} required></textarea>
      </form>
      <div className={styles.formbtn}>
        <Button $primary={true} onClick={onSubmit}>
          Save
        </Button>
        <Link to="..">
          <Button $primary={false}>Cancel</Button>
        </Link>
      </div>
    </>
  );
}
