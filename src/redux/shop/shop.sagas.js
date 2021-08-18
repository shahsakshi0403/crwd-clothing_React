import { takeLatest , call , put } from '@redux-saga/core/effects';
import ShopActionTypes from './shop.types';

import { firestore , convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess , fetchCollectionsFailure } from './shop.actions';

export function* fetchCollectionsStartAsync(){
    // yield console.log('I m fired');
    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    }catch (error){
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START , fetchCollectionsStartAsync );
}