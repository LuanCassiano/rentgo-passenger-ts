import { combineReducers } from 'redux';

import login from './Login/reducer';

export const rootReducer = combineReducers({
    login,
});

export type RootState = ReturnType<typeof rootReducer>;
