import { combineReducers } from 'redux';
import { reducer as form  } from 'redux-form';

import header from './header';

export default combineReducers({
    form,
    header
});