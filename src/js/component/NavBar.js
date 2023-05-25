import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./DropDown";

export const NavBar = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="navbar navbar-dark ">
        <div className="container">
          <Link className="img-container" to="/">
            <img src={props.starWars} alt="star wars logo" />
          </Link>

          <button
            className="navbar-toggler collapseBtn"
            type="button"
            onClick={toggleDropdown}
            aria-expanded={isDropdownOpen}
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon className="favoritesHeart" icon={props.faBars} />
          </button>
          <Dropdown faTrash={props.faTrash} faHeart={props.faHeart} isOpen={isDropdownOpen} />
          <div
            className={`collapse navbar-collapse ${isDropdownOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navCont navbar-nav me-auto mb-2 mb-lg-0 ul-cont d-flex flex-row justify-content-center">
              <li className="nav-item size">
                <Link className="btnNav" to="/TypesOfPlanets" onClick={closeDropdown}>
                  <button className="cardsTitle">Planets</button>
                </Link>
              </li>
              <li className="nav-item size">
                <Link className="btnNav" to="/TypesOfCharacters" onClick={closeDropdown}>
                  <button className="cardsTitle">Characters</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
