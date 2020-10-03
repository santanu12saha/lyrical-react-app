import React from 'react';
import Song from './Song';
import { gql, useQuery } from '@apollo/client';

const GET_SONGS = gql`
    query getSongs {
        songs {
            id
            title
        }
    }
`;

const songSelectedHandler = (id) => {
    console.log(id);
}

function SongList() {
    const { loading, error, data } = useQuery(GET_SONGS);

    let songs = null;

    if(loading) {
       songs = <p style={{textAlign: "center"}}>Loading...</p>;
    }

    if(error) {
        songs = <p style={{textAlign: "center"}}>`Something went wrong! (Error! ${error.message})`</p>;
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
        <div className = "songs">
            <h3>Songs</h3>
            <div className={error ? "" : "list-group"}>
                {songs}
            </div>
        </div>
        
    );
}

export default SongList;