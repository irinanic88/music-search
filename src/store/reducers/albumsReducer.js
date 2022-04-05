import { LOAD_ALBUMS, SUCCESS } from '../actionTypes';

const albumsReducer = (state = [], action) => {

    switch (action.type) {
        case `${LOAD_ALBUMS}__${SUCCESS}`:
            const { results } = action.data;
            return [...results];

        default:
            return state;
    }
}

export default albumsReducer;