import React from "react";
import { useState, useEffect } from "react";
const apiUrl = import.meta.env.VITE_API_URL;

function Category() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAPIData = async () => {
      const response = await fetch(
        `https://api.freeapi.app/api/v1/public/meals?page=1&limit=100`
      );

      const allMeal = await response.json();

      setData(allMeal.data.data);
      console.log(allMeal.data.data);
    };

    getAPIData();
  }, []);

  // Extract unique areas
  const uniqueAreas = [...new Set(data.map((meal) => meal.strCategory))];

  console.log(uniqueAreas);

  return (
    <div className="min-h-screen px-4">
      <ul className="w-full max-w-xs text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg mt-4 dark:bg-gray-700 dark:border-gray-600 dark:text-white mx-auto">
        {uniqueAreas.map((category) => (
          <li
            key={category}
            className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 text-center"
          >
            {category}
          </li>
        ))}
      </ul>
      <h1 className="text-center mt-4">MORE MEALS COMING SOON</h1>
    </div>
  );
}

export default Category;
