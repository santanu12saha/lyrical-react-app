import React from 'react';

const song = (props) => (
   <li className="collection-item song-item">
      <span>{props.title}</span>
      <i className="material-icons delete-button" onClick={props.delete}>
         delete   
      </i>
   </li>
);

export default song;