import React from 'react';
import SongListStateFull from './SongListStateFull';
import { gql, useQuery } from '@apollo/client';


const GET_SONGS = gql`
    query getSongs {
        songs {
            id
            title
        }
    }
`;

const  SongListQuery = ()  => {
    const { loading, error, data } = useQuery(GET_SONGS);

    if(loading) return 'Loading...';
    if(error) return `Error! ${error.message}`;

    return <SongListStateFull songs = {data.songs}/>;
    
}

export default SongListQuery;