import React from "react";
import { AiOutlineGitlab } from "react-icons/ai";
function Header() {
  return (
    <header className="page-header-box">
         <h1>IDO</h1><AiOutlineGitlab className="header-logo"></AiOutlineGitlab>
         <input type='checkbox' id='header-theme-selector' className="header-theme-selector"></input>
         <label for='header-theme-selector'>theme </label>
    </header>
  );
}

export default Header;
