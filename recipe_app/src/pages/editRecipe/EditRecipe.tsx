import { RecipeForm } from "../form/RecipeForm";
import { RecipeData, Tag } from "../../types/types";
import { useRecipe } from "../showRecipe/RecipeLayout";

type EditRecipeProps = {
  onSubmit: (id: string, data: RecipeData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

export function EditRecipe({ onSubmit, onAddTag, availableTags }: EditRecipeProps) {
  const recipe = useRecipe();

  return (
    <>
      <h1 className="mb-4">Edit a Recipe</h1>
      <RecipeForm
        title={recipe.title}
        servings={recipe.servings}
        tags={recipe.tags}
        imgUrl={recipe.imgUrl}
        description={recipe.description}
        ingredients={recipe.ingredients}
        directions={recipe.directions}
        onSubmit={(data) => onSubmit(recipe.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
}
