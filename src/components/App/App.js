import React from 'react';
import { useSelector } from 'react-redux';
import { albumsSelector } from '../../store/selectors';
import SearchBar from '../SearchBar';
import Album from '../Album';
import {Container, Grid } from '@mui/material';

const App = () => {
    const albums = useSelector(albumsSelector);

    return (
        <Container sx={{
            mt: 5,
        }}>
            <SearchBar />
            <Grid container
                  sx={{
                      mt: 5,
                  }}
                  rowSpacing={3} alignItems="stretch" justifyContent="center">
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

        </Container>
    )
}

export default App;