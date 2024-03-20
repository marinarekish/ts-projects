export type Tag = {
  id: string;
  label: string;
};

export type RecipeData = {
  title: string;
  servings: string;
  description: string;
  ingredients: string;
  directions: string;
  tags: Tag[];
  imgUrl: string;
};

export type Recipe = RecipeData & {
  id: string;
};

export type RawRecipeData = {
  title: string;
  servings: string;
  description: string;
  ingredients: string;
  directions: string;
  tagIds: string[];
  imgUrl: string;
};

export type RawRecipe = RawRecipeData & {
  id: string;
};
