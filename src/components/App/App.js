import React from 'react';
import { useSelector } from 'react-redux';
import { albumsSelector } from '../../store/selectors';
import SearchBar from '../SearchBar';
import Album from '../Album';

const App = () => {
    const albums = useSelector(albumsSelector);

    console.log(albums);

    return (
        <div data-id="app">
            <SearchBar />
            {
                albums.map(album => {
                    const { collectionId, artistName, collectionName, artworkUrl100 } = album;
                    return (
                        <Album key={collectionId}
                               artistName={artistName}
                               albumName={collectionName}
                               artwork={artworkUrl100}
                        />
                    )
                })
            }
        </div>
    )
}

export default App;