import React from "react";

export default function IngredientList(props) {
  const myIngredients = props.ingredientList;

  console.log(myIngredients);
  function MyIngredients() {
    return myIngredients.map((item) => {
      return <li key={item}>{item}</li>;
    });
  }

  return (
    <ul className="my-ingredients">
      <MyIngredients />
    </ul>
  );
}
