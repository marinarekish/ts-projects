import { RecipeForm } from "../form/RecipeForm";
import { RecipeData, Tag } from "../../types/types";

type NewRecipeProps = {
  onSubmit: (data: RecipeData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

export function NewRecipe({ onSubmit, onAddTag, availableTags }: NewRecipeProps) {
  return (
    <>
      <h1 className="mb-4">Add a Recipe</h1>
      <RecipeForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags} />
    </>
  );
}
