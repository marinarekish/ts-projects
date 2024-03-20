import { Navigate, Outlet, useOutletContext, useParams } from "react-router-dom";
import { Recipe } from "../../types/types";

type RecipeLayoutProps = {
  recipes: Recipe[];
};

export function RecipeLayout({ recipes }: RecipeLayoutProps) {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);

  if (recipe === null) return <Navigate to="/" replace />;

  return <Outlet context={recipe} />;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useRecipe() {
  return useOutletContext<Recipe>();
}
