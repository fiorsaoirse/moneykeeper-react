import { combineReducers } from 'redux';
import purchases from './purchase';
import {
    purchasesAddState,
    purchasesFetchState,
    purchasesRemoveState,
    purchasesUpdateState
} from './states';

export default combineReducers({
    purchasesAddState,
    purchasesFetchState,
    purchasesRemoveState,
    purchasesUpdateState,
    purchases,
});