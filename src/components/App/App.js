import React from 'react';
import { useSelector } from 'react-redux';
import { albumsSelector } from '../../store/selectors';
import SearchBar from '../SearchBar';

const App = () => {
    const albums = useSelector(albumsSelector);

    console.log(albums);

    return (
        <div data-id="app">
            <SearchBar />
        </div>
    )
}

export default App;