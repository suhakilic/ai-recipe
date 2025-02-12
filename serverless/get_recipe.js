// serverless/get_recipe.js
const fetch = require('node-fetch');
const HF_API_KEY = new HfInference(process.env.HF_API_KEY);

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;

export async function handler(event, context)  {
  try {
    const { ingredientsArr } = JSON.parse(event.body);
    const ingredientsString = ingredientsArr.join(",");

    const response = await fetch(
      "https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1",  // Hugging Face Inference URL
      {
        method: "POST",  // HTTP method
        headers: {
          Authorization: `Bearer ${HF_API_KEY}`,  // Authorization with your API key
          "Content-Type": "application/json",  // Content type is JSON
        },
        body: JSON.stringify({
          inputs: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,  // Inputs to the model
        }),
      }
    );    

    const data = await response.json();  // Parse the response from Hugging Face API
    console.log(data)
    return data.parse()
    // if (response.ok) {
    //   return {
    //     statusCode: 200,
    //     body: JSON.stringify({ recipe: data }),
    //   };
    // } else {
    //   return {
    //     statusCode: 400,
    //     body: JSON.stringify({ error: data }),
    //   };
    // }
  } catch (err) {
    console.error("Request failed:", err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
