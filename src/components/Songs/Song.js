import React from 'react';
import { Link } from 'react-router-dom';

const song = (props) => (
   <li className="collection-item">
      <Link to={`/songs/${props.id}`}> {props.title}</Link>
      <i className="material-icons delete-button" onClick={props.delete}>
         delete   
      </i>
   </li>
);

export default song;