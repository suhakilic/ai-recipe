# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Recipe App

## Project Overview
This Recipe app allows users to input a list of ingredients they have, and the app fetches a recipe suggestion based on those ingredients using the Hugging Face API. The app uses modern JavaScript features like async/await and fetch to handle API requests efficiently. It is designed with a responsive layout to ensure it works seamlessly across different devices.

I practiced **React** in this project by utilizing hooks such as `useState`, `useEffect`, and `useRef` for state management and lifecycle handling.

To maintain security, sensitive API keys are handled via **serverless functions** deployed on **Netlify**. These functions interact with the Hugging Face API securely, keeping the API keys safe. 

However, as the app is powered by serverless functions, sometimes the Hugging Face API response takes too long, and Netlify doesn't handle this correctly. In such cases, after clicking the "Get Recipe" button, the loading bar may show, but no recipe is returned. In these situations, users may need to click the button multiple times to get a recipe. This issue is currently not stable, but I hope to fix it in the future.

## Technologies Used
- **JavaScript (ES6+)**: The app uses modern JavaScript features, such as async/await and fetch, to handle API requests and responses efficiently.
- **React**: The app is built with React, using hooks like `useState`, `useEffect`, and `useRef` for managing component state and lifecycle.
- **Serverless Functions (Netlify)**: The app uses serverless functions deployed on Netlify to interact with the Hugging Face API securely and handle API keys in the backend.
- **Hugging Face API**: The app integrates with Hugging Face’s Mistral model to generate recipe suggestions based on the list of ingredients provided by the user.
- **CSS**: The app is styled using standard CSS with responsive layouts to ensure it looks good on all screen sizes.

## Features
- **Recipe Suggestion**: Users can input a list of ingredients, and the app suggests a recipe based on those ingredients using the Hugging Face API.
- **Responsive Design**: The app adapts to various screen sizes, providing a smooth experience on mobile, tablet, and desktop devices.
- **Serverless API Key Handling**: Sensitive API keys are securely managed through serverless functions, ensuring that the keys are never exposed to the client-side.
- **Modern JavaScript and React**: The app is built using ES6+ JavaScript and React, making the codebase clean, responsive, and easy to maintain.

## Known Issues
- **Inconsistent Recipe Fetching**: Due to the use of serverless functions and the time it takes for the Hugging Face API to respond, sometimes users may experience delays or failures in receiving a recipe. The loading bar may appear, but no recipe is returned. In such cases, users may need to click the "Get Recipe" button a few times before a recipe is generated. This issue is being investigated, and I hope to resolve it in future updates.

## Live Demo
You can access the live demo of the app here.
Test the app live <a href="https://suhacankilicairecipeapp.netlify.app/" target="_blank">here</a>.

## App Screenshots
<img src="https://github.com/user-attachments/assets/80bf0ec7-f8a9-43cf-8fc8-2daacb437aa7" width=200px height=400px>
<img src="https://github.com/user-attachments/assets/5f1770f2-fd73-4e11-9dac-2f76376961e8" width=200px height=400px>
<img src="https://github.com/user-attachments/assets/ac3e9647-c123-40f6-877b-02aaa0ac4c12" width=200px height=400px>
<img src="https://github.com/user-attachments/assets/eeb5b547-9bfe-46a1-bebc-1893a2054170" width=200px height=400px>



