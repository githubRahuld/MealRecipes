import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../container/Container";
import { Link } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "All Meals",
      slug: "/allmeals",
    },
    {
      name: "Category",
      slug: "/category",
    },
  ];

  return (
    <header className="py-3 shadow bg-gray-500 rounded-lg">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <img src="/img/pngwing.png" width="45px" />
            </Link>
          </div>
          <ul className="flex ml-auto space-x-2">
            {navItems.map((item) => (
              <li key={item.name} className="space-x-4">
                <button
                  onClick={() => navigate(item.slug)}
                  className="inline-bock px-6 py-2 duration-200 hover:bg-blue-500 rounded-full"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
