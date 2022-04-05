import { LOAD_ALBUMS, SUCCESS } from '../actionTypes';

const albumsReducer = (state = [], action) => {

    switch (action.type) {
        case `${LOAD_ALBUMS}__${SUCCESS}`:
            const { resultCount, results } = action.data;
            return [...state, ...results];

        default:
            return state;
    }
}

export default albumsReducer;