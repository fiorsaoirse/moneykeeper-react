import { createReducer } from 'deox';
import * as actions from '../../actions/category';
import { combineReducers } from 'redux';

// define default state
const defaultState: string = 'none';

// AppData reducer describe possible app states for categories
const createState = createReducer(defaultState, handleAction => [
    // create actions
    handleAction(actions.createPending, () => 'pending'),
    handleAction(actions.createSuccess, () => 'finished'),
    handleAction(actions.createFailure, () => 'failed'),
]);

const readState = createReducer(defaultState, handleAction => [
    // read actions
    handleAction(actions.readPending, () => 'pending'),
    handleAction(actions.readSuccess, () => 'finished'),
    handleAction(actions.readFailure, () => 'failed'),
]);

const updateState = createReducer(defaultState, handleAction => [
    // update actions
    handleAction(actions.updatePending, () => 'pending'),
    handleAction(actions.updateSuccess, () => 'finished'),
    handleAction(actions.updateFailure, () => 'failed'),
]);

const deleteState = createReducer(defaultState, handleAction => [
    // delete actions
    handleAction(actions.deletePending, () => 'pending'),
    handleAction(actions.deleteSuccess, () => 'finished'),
    handleAction(actions.deleteFailure, () => 'failed'),
]);

// Export as AppData reducer
export default combineReducers({
    createState,
    readState,
    updateState,
    deleteState,
});