import { all } from 'redux-saga/effects';

import login from './Login/sagas';

export default function* rootSaga(): Generator {
    yield all([login]);
}
