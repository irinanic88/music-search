import { LOAD_ALBUMS, SUCCESS } from '../actionTypes';

const albumsReducer = (state = [], action) => {

    switch (action.type) {
        case LOAD_ALBUMS:
            return [...state, action.data];

        default:
            return state;
    }
}

export default albumsReducer;