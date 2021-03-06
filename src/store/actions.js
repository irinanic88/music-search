import { LOAD_ALBUMS, REQUEST, SUCCESS, FAILURE, SET_CURRENT_VIEW } from './actionTypes';
import { URL } from '../utils/variables';

export const loadAlbums = (searchString) => async (dispatch) => {
    dispatch({
        type: `${LOAD_ALBUMS}__${REQUEST}`,
        data: [],
    });

    try {
        const data = await fetch(URL(searchString)).then(res => res.json());
        dispatch({
            type: `${LOAD_ALBUMS}__${SUCCESS}`,
            data,
        });

    } catch (error) {
        dispatch({
            type: `${LOAD_ALBUMS}__${FAILURE}`,
            data: [],
            error,
        });
    }
};

export const setCurrentView = (view) => ({
    type: SET_CURRENT_VIEW,
    view,
});


