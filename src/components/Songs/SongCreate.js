import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; 
import { gql, useMutation } from '@apollo/client';


const ADD_SONG = gql`
    mutation AddSong($title: String!) {
        addSong(title: $title) {
            id
            title
        }
    }
`;


const SongCreate = () => {
    const history = new useHistory(); 
    const [title, setTitle] = useState('');
    const [addSong] = useMutation(ADD_SONG);

    const handleSubmit = (event) => {
        event.preventDefault();
        addSong({ variables: { title: title } }).then(() => history.push('/'));
        setTitle('');
    }

    return (
        <div>
            <Link to="/"> 
                <div className="back-link"><i className="small material-icons">arrow_back</i> <span>Back</span></div>
            </Link>
            <h3>Create a New Song</h3>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <label htmlFor="song-title">Song Title</label>    
                    <input 
                        id="song-title"
                        className="validate"
                        type="text"
                        onChange={event => setTitle(event.target.value)}
                        value={title} />
                </div>
            </form>
        </div> 
    );
};

export default SongCreate;