import React, { useRef } from "react";
import Welcome from "./content/Welcome";
import Book from "./content/Book";
import Forma from "./content/Form";
import SchoolsTable from './content/SchoolsTable';
import Place from "./content/Place";
function Content() {
  return (
    <main className="content-box">
      <div className="feed-box">
        <Welcome />
        <Book/>
        <Place/>
        <SchoolsTable/>
        <Forma />
        </div>
    </main>
  );
}

export default Content;
