import { createReducer } from 'deox';
import * as actions from '../../actions/category';

// define default state
const defaultState: string = 'none';

export const categoriesAddState = createReducer(defaultState, handleAction => [
    // add actions
    handleAction(actions.addCategoriesSuccess, () => 'success'),
]);

export const categoriesFetchState = createReducer(defaultState, handleAction => [
    // fetch actions
    handleAction(actions.fetchCategoriesRequest, () => 'requested'),
    handleAction(actions.fetchCategoriesFailure, () => 'failed'),
    handleAction(actions.fetchCategoriesSuccess, () => 'finished'),
]);

export const categoriesUpdateState = createReducer(defaultState, handleAction => [
    // update actions
    handleAction(actions.updateCategoriesRequest, () => 'requested'),
    handleAction(actions.updateCategoriesFailure, () => 'failed'),
    handleAction(actions.updateCategoriesSuccess, () => 'finished'),
]);

export const categoriesRemoveState = createReducer(defaultState, handleAction => [
    // delete actions
    handleAction(actions.removeCategoriesRequest, () => 'requested'),
    handleAction(actions.removeCategoriesFailure, () => 'failed'),
    handleAction(actions.removeCategoriesSuccess, () => 'finished'),
]);