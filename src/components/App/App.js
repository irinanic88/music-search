import React from 'react';
import { useSelector } from 'react-redux';
import { albumsSelector } from '../../store/selectors';
import SearchBar from '../SearchBar';
import Album from '../Album';
import { Grid } from '@material-ui/core';

const App = () => {
    const albums = useSelector(albumsSelector);

    return (
        <div data-id="app">
            <SearchBar />
            <Grid container>
                {
                    albums.map(album => {
                        const { collectionId, artistName, collectionName, artworkUrl100 } = album;
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={collectionId}>
                                <Album artistName={artistName}
                                       albumName={collectionName}
                                       artwork={artworkUrl100}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>

        </div>
    )
}

export default App;