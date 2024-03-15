import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { RecipeCard } from "./recipeCard/RecipeCard";
import styles from "./RecipeList.module.css";
// import { v4 as uuidV4 } from "uuid";

export function RecipeList() {
  return (
    <div>
      <div className={styles.header}>
        <h2>Recipes</h2>
        <Link to="/new">
          <Button $primary={true}>Add new Recipe</Button>
        </Link>
      </div>
      <div className={styles.container}>
        <RecipeCard
          id="1"
          title="title"
          imgUrl="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
          description="description"
        />
        <RecipeCard
          id="2"
          title="title"
          imgUrl="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
          description="description"
        />
        <RecipeCard
          id="3"
          title="title"
          imgUrl="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
          description="description"
        />
        <RecipeCard
          id="4"
          title="title"
          imgUrl="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
          description="description"
        />
        <RecipeCard
          id="5"
          title="title"
          imgUrl="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
          description="description"
        />
      </div>
    </div>
  );
}
