import React, { useRef } from "react";
import Welcome from "./content/Welcome";
import Book from "./content/Book";
import Forma from "./content/Form";
function Content() {
  return (
    <main className="content-box">
      <div className="feed-box">
        <Welcome />
        <Book/>
        <Forma />
        </div>
    </main>
  );
}

export default Content;
