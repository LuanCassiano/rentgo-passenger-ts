import { combineReducers } from 'redux';

import login from './Login/reducer';
import driver from './Driver/reducer';

export const rootReducer = combineReducers({
    login,
    driver,
});

export type RootState = ReturnType<typeof rootReducer>;
