import { combineReducers } from 'redux';

import UserReducer from './UseReducer';

const MainReducer = combineReducers({
    user: UserReducer,
});

export default MainReducer;
