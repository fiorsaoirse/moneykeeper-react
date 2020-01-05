import { createReducer } from 'deox';
import * as actions from '../../actions/purchase';

// define default state
const defaultState: string = 'none';

export const purchasesAddState = createReducer(defaultState, handleAction => [
    // add actions
    handleAction(actions.addPurchaseSuccess, () => 'success'),
]);

export const purchasesFetchState = createReducer(defaultState, handleAction => [
    // fetch actions
    handleAction(actions.fetchPurchasesRequest, () => 'requested'),
    handleAction(actions.fetchPurchasesFailure, () => 'failed'),
    handleAction(actions.fetchPurchasesSuccess, () => 'finished'),
]);

export const purchasesUpdateState = createReducer(defaultState, handleAction => [
    // update actions
    handleAction(actions.updatePurchaseRequest, () => 'requested'),
    handleAction(actions.updatePurchaseFailure, () => 'failed'),
    handleAction(actions.updatePurchaseSuccess, () => 'finished'),
]);

export const purchasesRemoveState = createReducer(defaultState, handleAction => [
    // delete actions
    handleAction(actions.removePurchaseRequest, () => 'requested'),
    handleAction(actions.removePurchaseFailure, () => 'failed'),
    handleAction(actions.removePurchaseSuccess, () => 'finished'),
]);