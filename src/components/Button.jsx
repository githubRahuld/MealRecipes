import React from "react";

function Button({ children, className, type = "button", ...props }) {
  return (
    <button
      className={`text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
