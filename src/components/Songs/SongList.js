import React from 'react';
import Song from './Song';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import FETCH_SONGS from '../../queries/fetchSongs';
import DELETE_SONG from '../../mutations/deleteSong';

const SongList = () => {
    const { loading, error, data } = useQuery(FETCH_SONGS);
    const [deleteSong] = useMutation(DELETE_SONG);

    const songDeleteHandler = (id) => {
        deleteSong({
            variables: { id },
            refetchQueries: [{ query: FETCH_SONGS }] 
        });
     }

    let songs = null;

    if(loading) {
       songs = <p style={{textAlign: "center"}}>Loading...</p>;
    }

    if(error) {
        songs = <p style={{textAlign: "center"}}>Something went wrong! (Error! {error.message})</p>;
    }
    if(data) {
        songs = data.songs.map(({ id, title }) => {
            return <Song
                key={id}
                title={title}
                delete={() => songDeleteHandler(id)}
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