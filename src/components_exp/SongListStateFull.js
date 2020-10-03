import React, { Component } from 'react';

class SongListStateFull extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.songs.map(song => (
                    <li key={song.id}>{song.title}</li>
                ))}
            </div>
        );
    }
}

export default SongListStateFull;