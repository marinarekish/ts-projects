import { Navigate, Route, Routes } from "react-router-dom";
import { RecipeList } from "../pages/home/RecipeList";
import { NewRecipe } from "../pages/addRecipe/NewRecipe";
import { RecipeShow } from "../pages/recipe/RecipeShow";
import { EditRecipe } from "../pages/editRecipe/EditRecipe";
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <h1 className={styles.head}>Recipe Box</h1>
      <Routes>
        {/* home route */}
        <Route path="/" element={<RecipeList />}></Route>

        {/* ADD RECIPE route */}
        <Route path="/new" element={<NewRecipe />}></Route>

        {/* Recipe route */}
        <Route path="/:id">
          {/* SHOW RECIPE route */}
          <Route index element={<RecipeShow />}></Route>
          {/* EDIT RECIPE route */}
          <Route path="edit" element={<EditRecipe />}></Route>
        </Route>

        {/* Default route */}
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  );
}
