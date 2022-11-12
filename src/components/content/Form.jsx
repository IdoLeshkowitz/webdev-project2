import React from "react";
import { useState } from "react";
import fullnameValidator from "./../../utilities/Validators";
function Forma() {
  const initial_user = {
    fullName: "",
    phoneNumber: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: undefined,
    rating: 0,
    message: "",
    find: "",
  };
  const [user, setUser] = useState(initial_user);

  function nameChanged(e) {
    console.log(fullnameValidator(e.target.value));
  }
  return (
    <div className="feed-box-item feed-form-box">
      <h1 className="title">Register</h1>
      <form action="#" id="form" className="feed-input-area">
        <div className="form-user-details">
          <div className="input-box">
            <span className="details">full name</span>
            <input
              type="text"
              placeholder="enter your name"
              name="fullName"
              required
            ></input>
          </div>
          <div className="input-box">
            <span className="details">email</span>
            <input
              type="text"
              placeholder="enter "
              name="email"
              required
            ></input>
          </div>
          <div className="input-box">
            <span className="details">phone number</span>
            <input
              type="text"
              placeholder="enter "
              name="email"
              required
            ></input>
          </div>
          <div className="input-box">
            <span className="details">date of birth</span>
            <input
              type="date"
              placeholder="enter "
              name="email"
              required
            ></input>
          </div>
        </div>
        <div className="form-rating">
          <input type="radio" name="rating" id="dot-1"></input>
          <input type="radio" name="rating" id="dot-2"></input>
          <input type="radio" name="rating" id="dot-3"></input>
          <input type="radio" name="rating" id="dot-4"></input>
          <input type="radio" name="rating" id="dot-5"></input>
          <span className="rating-title">rating</span>
          <div className="rating-category">
            <label for="dot-1">
              <span className="dot one"></span>
              <span className="rating-text">1</span>
            </label>
            <label for="dot-2">
              <span className="dot two"></span>
              <span className="rating-text">2</span>
            </label>
            <label for="dot-3">
              <span className="dot three"></span>
              <span className="rating-text">3</span>
            </label>
          </div>
        </div>
        <div className="form-bottom">
        <div className="form-message">
          <label for="message" className="form-message-details">
            message<textarea id="message" name="message"></textarea>
          </label>
        </div>
        
        <div className="form-find">
          <label for="find">how did you find us</label>
          <select name="find" id="find" form="form">
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
          </select>
        </div>
        </div>
        <div className="buttons">
          <input type="submit"></input>
          <input type="reset"></input>
        </div>
      </form>
    </div>
  );
}

export default Forma;
