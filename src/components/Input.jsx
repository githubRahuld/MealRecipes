import React, { useId } from "react";

function Input({ label, className, type = "text", ...props }) {
  const id = useId();
  return (
    <div className="justify-center">
      {label && <label>{label}</label>}

      <input
        className={`block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
        type={type}
        {...props}
        id={id}
      ></input>
    </div>
  );
}

export default Input;
