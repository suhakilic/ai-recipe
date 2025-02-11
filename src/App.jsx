import React from "react";
import Header from "./components/Header";
import IngredientList from "./components/IngredientList";
import SeachBar from "./components/SearchBar";
import GetRecipe from "./components/GetRecipe";
import Recipe from "./components/Recipe.jsx";
import { getRecipeFromMistral } from "./ai.js";
import DeleteAll from "./components/DeleteAll.jsx";
import "./App.css";

export default function App() {
  const [ingredientList, setIngredientList] = React.useState([]);
  const [aiRecipe, setAiRecipe] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const animation = React.useRef(null);

  function handleForm(formData) {
    const newIngredient = formData.get("ingredient");
    if (ingredientList.length < 10) {
      setIngredientList((prev) => [...prev, newIngredient]);
      setAiRecipe(null);
    }
  }

  React.useEffect(() => {
    animation.current.scrollIntoView({ behavior: "smooth" });
  }, [loading]);

  function deleteAll() {
    setIngredientList([]);
    setAiRecipe(null);
  }

  async function getRecipe() {
    setAiRecipe(null);
    setLoading(true); // Start loading animation
    try {
      const result = await getRecipeFromMistral(ingredientList);
      setAiRecipe(result);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
    setLoading(false); // Stop loading animation
  }

  return (
    <div className="app">
      <Header />
      <SeachBar handleForm={handleForm} />
      <IngredientList ingredientList={ingredientList} />
      <DeleteAll deleteAll={deleteAll} />
      {ingredientList.length >= 3 ? <GetRecipe getRecipe={getRecipe} /> : null}
      <Recipe recipe={aiRecipe} loading={loading} ref={animation} />
    </div>
  );
}
