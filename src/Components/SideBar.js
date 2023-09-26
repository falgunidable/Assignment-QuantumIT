import { useState } from "react";
import Logo from "../images/logo.png";
import "../styles/style.css";

const SideBar = () => {
  const [activeNavItem, setActiveNavItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveNavItem(index);
  };

  return (
    <>
      <button className="p-2 mt-4 fs-3 text-decoration-none text-white d-flex text-center bg-transparent border-0">
        <img src={Logo} alt="logo" width={90} />
      </button>
      <ul className="nav nav-pills flex-column mt-5">
        <li className={`nav-item fs-5 ${activeNavItem === 0 ? "active" : ""}`}>
          <button
            className="nav-link text-white"
            onClick={() => handleItemClick(0)}
          >
            <i class="bi bi-grid"></i>
          </button>
        </li>
        <li className={`nav-item fs-5 ${activeNavItem === 1 ? "active" : ""}`}>
          <button
            className="nav-link text-white"
            onClick={() => handleItemClick(1)}
          >
            <i class="bi bi-people"></i>
          </button>
        </li>
        <li className={`nav-item fs-5 ${activeNavItem === 2 ? "active" : ""}`}>
          <button
            className="nav-link text-white"
            onClick={() => handleItemClick(2)}
          >
            <i class="bi bi-card-image"></i>
          </button>
        </li>
        <li className={`nav-item fs-5 ${activeNavItem === 3 ? "active" : ""}`}>
          <button
            className="nav-link text-white"
            onClick={() => handleItemClick(3)}
          >
            <i class="bi bi-graph-down"></i>
          </button>
        </li>
        <li className={`nav-item fs-5 ${activeNavItem === 4 ? "active" : ""}`}>
          <button
            className="nav-link text-white"
            onClick={() => handleItemClick(4)}
          >
            <i class="bi bi-folder"></i>
          </button>
        </li>
      </ul>
    </>
  );
};

export default SideBar;
