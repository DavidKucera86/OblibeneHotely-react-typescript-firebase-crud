import React from "react";
import { Link } from "react-router-dom";
import { StyledNavbar } from "./styles/Navbar.styled";
import { FaHotel, FaPlusCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <StyledNavbar>
      <h1>Oblíbené hotely</h1>
      <div className="links">
        <Link to="/">
          <FaHotel /> <div>Přehled hotelů</div>
        </Link>
        <Link to="/create">
          <FaPlusCircle />
          <div> Přidat nový hotel</div>
        </Link>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
