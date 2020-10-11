import React from 'react';
import Lyric from './Lyric';
import { useMutation } from '@apollo/client';
import LIKE_LYRIC from '../../mutations/likeLyric';

const LyricList = (props) => {
    const [likeLyric] = useMutation(LIKE_LYRIC);

    const lyricLikeHandler = (lyricId) => {
        likeLyric({
            variables: { id: lyricId }
        });
    }

    let lyrics = null;

    if(props.lyrics.length === 0) {
        return <p style={{textAlign: "center"}}>Opps!, No Lyric has been added for the song.</p>;
    } else { 
        lyrics = props.lyrics.map(({ id, content, likes }) => {
            return <Lyric 
                key={id}
                id={id}
                content={content}
                numberOfLikes={likes}
                liked= {() => lyricLikeHandler(id)}
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