import React, { useEffect, useState } from "react";
import { Card } from "../components";

const apiUrl = import.meta.env.VITE_API_MEAL_URL;

function AllMeals() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  //handle pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPages] = useState(1);

  useEffect(() => {
    const getAPIData = async () => {
      const response = await fetch(
        `${apiUrl}/meals?page=${currentPage}&limit=12`
      );

      const allMeals = await response.json();

      setData(allMeals.data.data);
      // console.log(allMeals.data.totalPages);
      setTotalPages(allMeals.data.totalPages);
      setLoading(false);
    };

    getAPIData();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // if search input is empty then all meals will taken in filteredMeals

  return (
    <>
      {loading && <h1>Loading...</h1>}
      <div className="min-h-screen ">
        {data.length > 0 && (
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded bg-blue-500 text-white"
            >
              Previous Page
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPage}
              className="px-4 py-2 rounded bg-blue-500 text-white"
            >
              Next Page
            </button>
          </div>
        )}

        {data.length > 0 && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
            {data.map((meal, index) => (
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
    </>
  );
}

export default AllMeals;
