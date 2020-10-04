import React from 'react';

const song = (props) => (
   <li onClick={props.clicked} className="collection-item song-item">{props.title}</li>
);

export default song;