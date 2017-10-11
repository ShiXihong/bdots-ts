import { takeEvery } from 'redux-saga/effects';

function* submitData(action: any) {
    try {
        //
    } catch (e) {
        //
    }
}

export default function* testSaga() {
    yield takeEvery('submitData', submitData);
}
