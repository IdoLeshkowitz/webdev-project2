import React,{Route} from "react";
import {AiFillGithub} from 'react-icons/ai'   ;
import {MdAlternateEmail} from'react-icons/md'; 
function LinkBox() {
  return <div className="welcome-link-box">
        <a href="http://www.linkedin.com/in/ido-leshkowitz-8aa255255"><AiFillGithub className='logos-git'/></a>
  </div>;
}

export default LinkBox;
