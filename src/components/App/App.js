import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { pageSize } from '../../utils/variables';
import { albumsSelector, currentAlbumsViewSelector } from '../../store/selectors';
import SearchBar from '../SearchBar';
import Album from '../Album';
import SwitchView from '../SwitchView';
import { Container, Grid, Button } from '@mui/material';

const App = () => {
    const albums = useSelector(albumsSelector);
    const currentView = useSelector(currentAlbumsViewSelector);
    const displayGridItem = (columnNumber) => {
        return currentView === 'list' ? 12 : columnNumber;
    }

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
            alignItems: 'center',
            gap: 3
        }}>
            <SearchBar />
            {
                albums.length > 0 && <SwitchView />
            }
            <Grid container
                  rowSpacing={2}
                  columnSpacing={3}
                  alignItems="stretch"
            >
                {
                    visibleAlbums.map(album => {
                        const { collectionId, artistName, collectionName, artworkUrl100 } = album;

                        return (
                            <Grid item
                                  xs={12}
                                  sm={displayGridItem(6)}
                                  md={displayGridItem(4)}
                                  lg={displayGridItem(3)}
                                  key={collectionId}>
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