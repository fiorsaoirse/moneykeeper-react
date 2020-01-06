import { combineReducers } from 'redux';
import categories from './category';
import {
    categoriesAddState,
    categoriesFetchState,
    categoriesRemoveState,
    categoriesUpdateState
} from './states';

export default combineReducers({
    categoriesAddState,
    categoriesFetchState,
    categoriesRemoveState,
    categoriesUpdateState,
    categories,
});