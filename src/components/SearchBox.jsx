import React, { useState } from "react";
import { Input } from "./index";
const apiUrl = import.meta.env.VITE_API_URL;
const endpoint = `${apiUrl}/public/meals?page=1&limit=10`;

function SearchBox({ setSearchInput }) {
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="w-full flex justify-center ">
      <label
        htmlFor="search"
        className={`mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white`}
      >
        Search
      </label>

      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none justify-center ">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <div className="flex justify-center">
          <Input onChange={handleChange} type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
