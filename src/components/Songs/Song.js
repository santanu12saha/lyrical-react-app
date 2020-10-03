import React from 'react';

const song = (props) => (
   <button type="button" className="list-group-item list-group-item-action" onClick={props.clicked}>{props.title}</button>
);

export default song;