import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { pageSize } from '../../utils/variables';
import { albumsSelector } from '../../store/selectors';
import SearchBar from '../SearchBar';
import Album from '../Album';
import { Container, Grid, Button } from '@mui/material';

const App = () => {
    const albums = useSelector(albumsSelector);

    const [currentPage, setCurrentPage] = useState(1);
    const [showMore, setShowMore] = useState(false);

    const visibleAlbums = albums.slice(0, currentPage*pageSize);

    useEffect(() => {
        albums.length > 0 && visibleAlbums.length < albums.length ? setShowMore(true) : setShowMore(false);
    }, [visibleAlbums]);

    const handleShowMoreClick = () => {
        setCurrentPage(currentPage + 1);
    }

    return (
        <Container sx={{
            mt: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <SearchBar />
            <Grid container
                  sx={{
                      mt: 5,
                  }}
                  rowSpacing={5}
                  columnSpacing={3}
                  alignItems="stretch">
                {
                    visibleAlbums.map(album => {
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
            {   showMore &&
            <Button sx={{
                my: 7
            }} variant='outlined' onClick={handleShowMoreClick}
            >
                Show more
            </Button>
            }
        </Container>
    )
}

export default App;