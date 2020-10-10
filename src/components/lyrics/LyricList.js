import React from 'react';
import Lyric from './Lyric';

const LyricList = (props) => {

    let lyrics = null;

    if(props.lyrics.length === 0) {
        return <p style={{textAlign: "center"}}>Opps!, No Lyric has been added for the song.</p>;
    } else { 
        lyrics = props.lyrics.map(({ id, content }) => {
            return <Lyric 
                key={id}
                id={id}
                content={content}
            />
        });
    }

    return (
        <ul className="collection">
            {lyrics}
        </ul>
    );
};

export default LyricList;