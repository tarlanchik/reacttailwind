Step 1: Create a New Vite + React Project

npm create vite@latest projectname -- --template react //NOTE: you can replace projectname with "." if you wanted to create project in the current folder  
npm install

Step 2: Install and Configure Tailwind CSS
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init
This creates:
    tailwind.config.js
    postcss.config.js

Now configure Tailwind by editing tailwind.config.js:
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


Edit src/index.css to include Tailwind's base styles:
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;


Then in main.jsx, import the CSS:

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // <- Tailwind styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


Step 3: Install a Select Component (optional if you want to use the selectpicker Component in the project)
npm install react-select

Step 4: Add a Searchable Select (Combobox)
Replace your App.jsx with this:

import { useState } from "react";
import Select from "react-select";

// 🚗 Grouped car brand options by country
const groupedOptions = [
    {
        label: "🇩🇪 German Cars",
        options: [
            { value: "bmw", label: "BMW" },
            { value: "audi", label: "Audi" },
            { value: "mercedes", label: "Mercedes-Benz" },
            { value: "porsche", label: "Porsche" },
        ],
    },
    {
        label: "🇯🇵 Japanese Cars",
        options: [
            { value: "toyota", label: "Toyota" },
            { value: "honda", label: "Honda" },
            { value: "nissan", label: "Nissan" },
            { value: "mazda", label: "Mazda" },
        ],
    },
    {
        label: "🇺🇸 American Cars",
        options: [
            { value: "ford", label: "Ford" },
            { value: "chevrolet", label: "Chevrolet" },
            { value: "tesla", label: "Tesla" },
            { value: "dodge", label: "Dodge" },
        ],
    },
];

// Tailwind-like styling for react-select
const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "white",
        borderColor: "#d1d5db",
        borderRadius: "0.375rem",
        padding: "0.25rem",
        boxShadow: "none",
        '&:hover': { borderColor: "#9ca3af" },
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? "#3b82f6" : "white",
        color: state.isFocused ? "white" : "#111827",
        padding: "0.5rem 1rem",
    }),
    multiValue: (provided) => ({
        ...provided,
        backgroundColor: "#e5e7eb",
        borderRadius: "0.25rem",
        padding: "2px 6px",
    }),
    multiValueLabel: (provided) => ({
        ...provided,
        color: "#111827",
    }),
    multiValueRemove: (provided) => ({
        ...provided,
        color: "#6b7280",
        ':hover': {
            backgroundColor: "#f87171",
            color: "white",
        },
    }),
};

export default function App() {
    const [selectedCars, setSelectedCars] = useState([]);

    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Select Your Favorite Car Brands</h1>
            <Select
                isMulti
                options={groupedOptions}
                value={selectedCars}
                onChange={setSelectedCars}
                placeholder="Search and select car brands..."
                styles={customStyles}
                isSearchable
            />
        </div>
    );
}





Step 5: Start the App
npm run dev

Visit http://localhost:5173 in your browser and you'll see a Tailwind-styled searchable select (combobox).



To move the project to github (YOU SHOULD CLOSE THE VISUAL STUDIO FIRST)
Step 1: Initialize Git (if not already)
git init

Step 2: Create a .gitignore file
touch .gitignore

Add this content to .gitignore:
node_modules/
dist/
.env
.vs/


 Step 3: Create a GitHub Repo
    Go to https://github.com/new
    Enter a name like reacttailwind
    (Optional) Add a description
    DO NOT check "Initialize with README"
    Click Create repository

	
Step 4: Connect Local Git to GitHub
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/tarlanchik/reacttailwind.git
git push -u origin main
