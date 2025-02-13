// import { HfInference } from "@huggingface/inference";

// // Access the environment variable
// const { HF_API_KEY } = process.env;
// console.log("Hugging Face API Key: ", HF_API_KEY);  // Log the API Key to check if it's being read correctly

// const hf = new HfInference(HF_API_KEY);

// const SYSTEM_PROMPT = `
// You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
// `;

// exports.handler = async (event, context) => {
//   try {
//     const { ingredientsArr } = JSON.parse(event.body);
//     const ingredientsString = ingredientsArr.join(",");

//     const response = await hf.chatCompletion({
//       model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
//       messages: [
//         { role: "system", content: SYSTEM_PROMPT },
//         {
//           role: "user",
//           content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
//         },
//       ],
//       max_tokens: 1024,
//     });
//     then(console.log(response))
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ recipe: response.choices[0].message.content }),
//     };
//   } catch (error) {
//     console.error("Error fetching recipe:", error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: "Internal Server Error" }),
//     };
//   }
// };

import { HfInference } from "@huggingface/inference";

// Access the environment variable
const { HF_API_KEY } = process.env;
console.log("Hugging Face API Key: ", HF_API_KEY);  // Log the API Key to check if it's being read correctly

const hf = new HfInference(HF_API_KEY);

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;

export async function handler(event, context) {
  try {
    const { ingredientsArr } = JSON.parse(event.body);
    const ingredientsString = ingredientsArr.join(",");

    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      max_tokens: 1024,
      temperature: 0.0,  // ⬇ Less creativity = Faster response
    });
    // console.log("API Response:", JSON.stringify(response, null, 2));
    return {
      statusCode: 200,
      body: JSON.stringify({ recipe: response.choices[0].message.content }),
    };
  } catch (error) {
    console.error("Error fetching recipe:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};