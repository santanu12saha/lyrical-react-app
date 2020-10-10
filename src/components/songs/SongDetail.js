import React from 'react';
import { Link } from 'react-router-dom';
import LyricCreate from  '../../components/lyrics/LyricCreate';
import LyricList from '../../components/lyrics/LyricList';
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
                <Link to="/"> 
                    <div className="back-link"><i className="small material-icons">arrow_back</i> <span>Back</span></div>
                </Link>
                <h3>{song.title}</h3>
                <LyricList lyrics = {song.lyrics}/>
                <LyricCreate songId= {props.match.params.id}/>
            </div>
        );
    }
}

export default SongDetail;