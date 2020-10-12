import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../UI/Spinner/Spinner'; 
import { useMutation } from '@apollo/client';
import FETCH_SONGS from '../../queries/fetchSongs';
import ADD_SONG from '../../mutations/addSong';


const SongCreate = (props) => {
    const [isLoading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [addSong] = useMutation(ADD_SONG);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        addSong({ 
            variables: { title: title },
            refetchQueries: [{ query: FETCH_SONGS }] 
        }).then(() => {
            setTitle('');
            setLoading(false);
            props.history.push('/');
        });
    }

    if(isLoading) {
        return <Spinner/>;
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