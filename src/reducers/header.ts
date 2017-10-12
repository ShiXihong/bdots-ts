import { handleActions } from 'redux-actions';
import * as actions from '../actions/header';

export interface HeaderState {
    userInfo: {};
    loading: boolean;
}

const initialState = {
    userInfo: null
};

export default handleActions({
    [actions.bindUserInfo](state: HeaderState, action: any) {
        return Object.assign({}, state, {userInfo: action.payload});
    }
}, initialState);