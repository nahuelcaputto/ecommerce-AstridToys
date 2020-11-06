import React from "react";
import SearchBar from "../_searchBar/searchBar";
import Login from "./login";
import Cart from "./cart";
import { Link } from "react-router-dom";

export default function NavBar() {
  const link = {
    listStyle: "none",
    textDecoration: "none",
    margin: "20px",
    paddingTop: "10px",
    color: "black",
  };
  
  return (
    <nav className="bg-warning d-flex flex-direction-column navbar navbar-dark">
      <h1 className="col-12 text-center px-5 pt-5 pb-3">
        Astrid Toys
      </h1>
      <ul className="d-flex col-sm-12 col-md-12 col-lg-5 justify-content-center justify-content-lg-start">
        <Link to="/">
          <li style={link}>Home</li>
        </Link>
        <Link to="/products">
          <li style={link}>Products</li>
        </Link>
        <Link to="#">
          <li style={link}>Categories</li>
        </Link>
        <Link to="#">
          <li style={link}>Dashboard</li>
        </Link>
      </ul>
      <div className="d-flex col-12 col-lg-7 justify-content-center justify-content-lg-end">
        <Login />
        <Cart />
        <SearchBar />
      </div>
    </nav>
  );
}
