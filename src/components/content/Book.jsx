import React from "react";
import { useState } from "react";
function Book(props) {
  return (
    <div className="feed-book-box feed-box-item" id="book">
      <h1 className="feed-article-header">Rafi Cohen Memulaim</h1>
        <p className="feed-article-content feed-book-article-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse id
          soluta quibusdam eveniet ducimus, minima tempore a voluptatibus sint
          reiciendis ex maxime iste laborum distinctio animi libero neque nihil
          possimus explicabo optio quis vero illo fuga. Facere harum eius nam
          cumque, minima explicabo fuga natus ex eveniet placeat. Quam,
          similique.
        </p>
            <div className="feed-article-img-hover-area"><img className='feed-article-img'src="https://cdn.shopify.com/s/files/1/0245/9572/6432/products/D7_9E_D7_9E_D7_95_D7_9C_D7_90_D7_99_D7_9D-_D7_A8_D7_A4_D7_99-_D7_9B_D7_94_D7_9F_540x.jpg?v=1574588152"></img></div>
          
      </div>
  );
}

export default Book;
