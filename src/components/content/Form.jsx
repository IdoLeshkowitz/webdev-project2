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
    <div className="feed-box-item feed-form-box" id='book'>
      
      {/* form header */}
      <h1 className="form-header">Register</h1>
        <form action="#" id="form" className="form-body-box">
        
        {/* form body  */}
           <div className="form-user-details">
          <div className="input-box">
            <span className="details">full name</span>
            <input
              type="text"
              placeholder="enter your name"
              name="fullName"
              pattern="[A-Za-z]{1,30}"
              required
            ></input>
          </div>
          <div className="input-box">
            <span className="details">email</span>
            <input
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              placeholder="enter "
              name="email"
              required
            ></input>
          </div>
          <div className="input-box">
            <span className="details">phone number</span>
            <input
              type="tel"
              pattern='[0-9]{10}'
              placeholder="enter"
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
           <div className='form-body-message-selection'>
       
          <label for="message" className="form-message-box">
          <span>message</span>  <textarea id="message" name="message"></textarea>
          </label>
       
        
        <div className="form-find">
          <label for="find">how did you find us</label>
          <select name="find" id="find" form="form">
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
          </select>
        </div>
         </div>
           <div className="form-body-rating">
            <input type="radio" name="rating" id="dot-1" required></input>
            <input type="radio" name="rating" id="dot-2"></input>
            <input type="radio" name="rating" id="dot-3"></input>
            <input type="radio" name="rating" id="dot-4"></input>
            <input type="radio" name="rating" id="dot-5"></input>
            <span className="form-body-rating-header">rating</span>
            <div className="form-body-rating-selection">
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
              <label for="dot-4">
                <span className="dot four"></span>
                <span className="rating-text">4</span>
              </label>
              <label for="dot-5">
                <span className="dot five"></span>
                <span className="rating-text">5</span>
              </label>
            </div>
          </div> 
    

        <div className="form-bottom">
          <input type="submit"></input>
          <input type="reset"></input>
        </div>
      </form>
    </div>
  );
}

export default Forma;


