import React from 'react';

const Album = ({artwork, artistName, albumName}) => {
    return(
        <div>
            <img alt={`${albumName} cover`} src={artwork} />
            <h2>{albumName}</h2>
            <p>{artistName}</p>
        </div>
    )
}

export default Album;