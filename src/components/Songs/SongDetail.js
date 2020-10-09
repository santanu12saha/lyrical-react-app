import React from 'react';
import { useQuery } from '@apollo/client';
import FETCH_SONG from '../../queries/fetchSong';

const SongDetail = (props) => {
    
    const { loading, error, data } = useQuery(FETCH_SONG, {
        variables: { id: props.match.params.id}
    });

    if(loading) {
        return <p style={{textAlign: "center"}}>Loading...</p>;
    }
 
    if(error) {
        return <p style={{textAlign: "center"}}>Something went wrong! (Error! {error.message})</p>;
    }

    if(data) {
        const { song } = data;
        return (
            <div>
                <h3>{song.title}</h3>
            </div>
        );
    }
}

export default SongDetail;