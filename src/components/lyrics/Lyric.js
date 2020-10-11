import React from 'react';

const Lyric = (props) => (
   <li className="collection-item">
      {props.content}
      <div className="vote-box">
         <i 
            className="material-icons liked-button"
            onClick={props.liked}
            >thumb_up</i>
            {props.numberOfLikes}  
      </div> 
   </li>
);

export default Lyric;