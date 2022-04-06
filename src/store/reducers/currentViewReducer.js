import { SET_CURRENT_VIEW } from '../actionTypes';

const initialState = {
    albums: 'module'
}

const currentViewReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_VIEW:
            return {
                ...state,
                albums: action.view
            };

        default:
            return state;
    }
}

export default currentViewReducer;