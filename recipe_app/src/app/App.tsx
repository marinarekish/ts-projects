import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import { Navigate, Route, Routes } from "react-router-dom";
import { v4 as uuidV4 } from "uuid"; // library for IDs creating
import { useMemo } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";
import { RawRecipe, RecipeData, Tag } from "../types/types";

import { RecipeList } from "../pages/home/RecipeList";
import { NewRecipe } from "../pages/addRecipe/NewRecipe";
import { ShowRecipe } from "../pages/showRecipe/ShowRecipe";
import { RecipeLayout } from "../pages/showRecipe/RecipeLayout";
import { EditRecipe } from "../pages/editRecipe/EditRecipe";

function App() {
  const [recipes, setRecipes] = useLocalStorage<RawRecipe[]>("RECIPES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  const recipesWithTags = useMemo(() => {
    return recipes.map((recipe) => {
      return { ...recipe, tags: tags.filter((tag) => recipe.tagIds.includes(tag.id)) };
    });
  }, [recipes, tags]);

  function onCreateRecipe({ tags, ...data }: RecipeData) {
    setRecipes((prevRecipes) => {
      return [...prevRecipes, { ...data, id: uuidV4(), tagIds: tags.map((tag) => tag.id) }];
    });
  }

  function onUpdateRecipe(id: string, { tags, ...data }: RecipeData) {
    setRecipes((prevRecipes) => {
      return prevRecipes.map((recipe) => {
        if (recipe.id === id) {
          return { ...recipe, ...data, tagIds: tags.map((tag) => tag.id) };
        } else {
          return recipe;
        }
      });
    });
  }

  function onDeleteRecipe(id: string) {
    setRecipes((prevRecipes) => {
      return prevRecipes.filter((recipe) => recipe.id !== id);
    });
  }

  function addTag(tag: Tag) {
    setTags((prev) => [...prev, tag]);
  }

  function updateTag(id: string, label: string) {
    setTags((prevTags) => {
      return prevTags.map((tag) => {
        if (tag.id === id) {
          return { ...tag, label };
        } else {
          return tag;
        }
      });
    });
  }

  function deleteTag(id: string) {
    setTags((prevTags) => {
      return prevTags.filter((tag) => tag.id !== id);
    });
  }

  return (
    <Container className="my-4">
      <Routes>
        {/* home path */}
        <Route
          path="/"
          element={
            <RecipeList
              recipes={recipesWithTags}
              availableTags={tags}
              onUpdateTag={updateTag}
              onDeleteTag={deleteTag}
            />
          }
        ></Route>

        {/* new recipe path */}
        <Route
          path="/new"
          element={<NewRecipe onSubmit={onCreateRecipe} onAddTag={addTag} availableTags={tags} />}
        ></Route>

        {/* show and edit a recipe path */}
        <Route path="/:id" element={<RecipeLayout recipes={recipesWithTags} />}>
          <Route index element={<ShowRecipe onDelete={onDeleteRecipe} />}></Route>
          <Route
            path="edit"
            element={<EditRecipe onSubmit={onUpdateRecipe} onAddTag={addTag} availableTags={tags} />}
          ></Route>
        </Route>

        {/* default path */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
