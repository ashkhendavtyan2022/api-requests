import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css"
import { NavBar } from "./NavBar";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavBar />
    </div>
  );
};