import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_SONGS = gql`
    query getSongs {
        songs {
            id
            title
        }
    }
`;

function SongList() {
    const { loading, error, data } = useQuery(GET_SONGS);

    if(loading) return 'Loading...';
    if(error) return `Error! ${error.message}`;

    return (
        <div>
             {data.songs.map(song => (
                <li key={song.id}>{song.title}</li>
             ))}
        </div>
    );
}

export default SongList;