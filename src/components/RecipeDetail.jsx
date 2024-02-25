import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const mealUrl = import.meta.env.VITE_API_MEAL_URL;

function RecipeDetail() {
  const [recipe, setRecipe] = useState([]);
  const { recipeId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://api.freeapi.app/api/v1/public/meals/${recipeId}`
        );
        const mealDataById = await response.json();

        setRecipe(mealDataById.data);
        console.log(mealDataById.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, []);

  return (
    <div className="w-full py-8 mt-4 ">
      <div className="">
        <h1 className="mb-4 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          {recipe.strMeal}
        </h1>
        <div className="flex flex-col items-center justify-center  ">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="rounded-lg mr-4 max-w-xs "
          />
          <div className="w-full py-8 mt-4  flex flex-col items-center">
            <p className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 h-auto flex items-center ">
              <strong>Category: </strong> {recipe.strCategory}
            </p>
            <p className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 h-auto  flex items-center">
              <strong>Area : </strong> {recipe.strArea}
            </p>
          </div>
        </div>
      </div>
      <div className="mb-4 flex justify-center ">
        <p className="font-bold text-lg underline hover:no-underline">
          Ingredients:
        </p>
        <ul>
          {Object.keys(recipe).map((key) => {
            if (key.startsWith("strIngredient") && recipe[key]) {
              const ingredientNumber = key.slice(13);
              return (
                <li
                  key={ingredientNumber}
                  className="list-disc ml-4 flex justify-start"
                >
                  {recipe[key]} - {recipe["strMeasure" + ingredientNumber]}
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
      <div className="flex justify-start mb-4 ">
        <p className="font-bold text-lg underline hover:no-underline">
          Instructions:
        </p>
        <p className="text-gray-500 whitespace-normal dark:text-gray-400">
          {recipe.strInstructions}
        </p>
      </div>
      {recipe.strYoutube && (
        <p>
          <a
            href={recipe.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Watch on YouTube
          </a>
        </p>
      )}
      {recipe.strSource && (
        <p>
          <a
            href={recipe.strSource}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Source
          </a>
        </p>
      )}
    </div>
  );
}

export default RecipeDetail;
