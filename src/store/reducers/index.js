import { combineReducers } from 'redux';
import albumsReducer from './albumsReducer';
import currentViewReducer from './currentViewReducer';

export default combineReducers({
    albums: albumsReducer,
    currentView: currentViewReducer,
})