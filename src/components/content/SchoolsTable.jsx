import React, { useState } from "react";
import data from "../schoolsTable/mock-data.json";
//import styles from "./../schoolsTable/";
import Schools from "../schoolsTable/Schools";



function SchoolsTable() {
  const [schools, setSchools] = useState(new Schools(data));
  const [headers, setHeaders] = useState([
    "schoolName",
    "className",
    "teacher",
    "rating",
    "comments",
  ]);
  const [numberOfRows, setNumberOfROws] = useState(0);

  return (
    <table  className="feed-box-item feed-schoolstable-box">
      <thead>
        <tr key = {"-1"}>
          {headers.map((header,index) => (
            <th key ={"-1"+index.toString()}>{header}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {schools.readLines(headers) }
        {schools.summary()}
      </tbody>
    </table>
  );
}

export default SchoolsTable;
