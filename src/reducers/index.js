import { combineReducers } from 'redux';

import NavbarReducer from './navbarReducer/navbarReducer';

const allReducers = combineReducers({
    NavbarReducer,
});

export default allReducers;