import { LOAD_ALBUMS } from './actionTypes';

export const loadAlbums = (searchString) => ({
    type: LOAD_ALBUMS,
    data: searchString,
});