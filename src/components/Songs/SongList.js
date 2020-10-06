import React from 'react';
import Song from './Song';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import FETCH_SONGS from '../../queries/fetchSongs';

const songSelectedHandler = (id) => {
    console.log(id);
}

function SongList() {
    const { loading, error, data } = useQuery(FETCH_SONGS);

    let songs = null;

    if(loading) {
       songs = <p style={{textAlign: "center"}}>Loading...</p>;
    }

    if(error) {
        songs = <p style={{textAlign: "center"}}>Something went wrong! (Error! {error.message})</p>;
    }
    if(data) {
        songs = data.songs.map(song => {
            return <Song
                key={song.id}
                title={song.title}
                clicked={() => songSelectedHandler(song.id)}
            />
        });
    }

    return (
        <div>
            <h3>Songs</h3>
            <ul className="collection">
                {songs}
            </ul>
            <Link 
                to="/songs/new"
                className="btn-floating btn-large red right"> 
                <i className="material-icons">add</i>   
            </Link>
        </div>
        
    );
}

export default SongList;