// // ai.js
// export async function getRecipeFromMistral(ingredientsArr) {
//   try {
//     const response = await fetch("./.netlify/functions/get_recipe", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ ingredientsArr }),  // Sending ingredients array
//     });

//     const responseData = await response.json();
//     return responseData.recipe;  // Return the recipe from the serverless function
//   } catch (err) {
//     console.error("Error fetching recipe:", err.message);
//     return null;
//   }
// }

// ai.js
export async function getRecipeFromMistral(ingredientsArr) {
  try {
    const response = await fetch("./.netlify/functions/get_recipe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ingredientsArr }), // Sending ingredients array
    });

    const responseData = await response.json();
    return responseData.recipe; // Return the recipe from the serverless function
  } catch (err) {
    console.error("Error fetching recipe:", err.message);
    return null;
  }
}
