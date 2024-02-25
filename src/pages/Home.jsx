import React, { useEffect, useState } from "react";
import { Card, SearchBox } from "../components";
const apiUrl = import.meta.env.VITE_API_MEAL_URL;

function Home() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const getAPIData = async () => {
      try {
        //https://api.freeapi.app/api/v1/public/meals?page=1&limit=500
        const response = await fetch(`${apiUrl}/meals?page=1&limit=500`);
        const allMeals = await response.json();

        setData(allMeals.data.data);
        console.log(allMeals.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getAPIData();
  }, [searchInput]);

  // Filter meals based on search input
  const filteredMeals = data.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row md:justify-between items-center mt-6">
          <SearchBox setSearchInput={setSearchInput} />
        </div>
        {filteredMeals.length == 0 && (
          <h1 className="mt-6">No Item Available</h1>
        )}
        {searchInput !== "" && filteredMeals.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {filteredMeals.map((meal, index) => (
              <Card
                key={index}
                title={meal.strMeal}
                src={meal.strMealThumb}
                link={meal.strSource}
                category={meal.strCategory}
                id={meal.id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
