import React from "react";
import { useRef } from "react";

function NavBar() {
  const topics = ["welcome", "book", "place", "schoolsTable", "form"];
  return (
    <nav className="c-main-navbar">
      <ul>
        {topics.map(topic=><li><a href={`#${topic}`}>{topic}</a></li>)}
      </ul>
    </nav>
  );
}

export default NavBar;
