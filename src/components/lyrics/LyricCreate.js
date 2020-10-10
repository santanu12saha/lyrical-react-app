import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import ADD_LYRIC_TO_SONG from '../../mutations/addLyricToSong';

const LyricCreate = (props) => {

    const [content, setContent] = useState('');
    const [addLyricToSong] = useMutation(ADD_LYRIC_TO_SONG);

    const handleLyricSubmit = (event) => {
        event.preventDefault();
        addLyricToSong({
            variables: { 
                content: content,
                songId: props.songId 
            }
        }).then(() => {
            setContent('');
        });
       
    }

    return (
        <form onSubmit={handleLyricSubmit}>
            <div className="input-field">
                <label htmlFor="content">Add a Lyric</label>    
                    <input 
                        id="content"
                        className="validate"
                        type="text"
                        onChange={event => setContent(event.target.value)}
                        value={content} />
            </div>
        </form>  
    );
}

export default LyricCreate;