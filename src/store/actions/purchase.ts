import { createActionCreator } from 'deox';
import axios from 'axios';
import RestRouter from '../../restRoutes';
import { Purchase } from '../../classes/Purchase';

/* ACTIONS AS FUNCTIONS */

// Action for creating purchase
export const createPending = createActionCreator('PURCHASE_CREATE_PENDING');
export const createSuccess = createActionCreator('PURCHASE_CREATE_SUCCESS',
  resolve => (purchase: Purchase) => resolve({ purchase }));
export const createFailure = createActionCreator('PURCHASE_CREATE_FAILURE');

// Actions for reading purchase
export const readPending = createActionCreator('PURCHASE_READ_PENDING');
export const readSuccess = createActionCreator('PURCHASE_READ_SUCCESS',
  resolve => (purchases: Purchase[]) => resolve({ purchases }));
export const readFailure = createActionCreator('PURCHASE_READ_FAILURE');

// Actions for updating purchase
export const updatePending = createActionCreator('PURCHASE_UPDATE_PENDING');
export const updateSuccess = createActionCreator('PURCHASE_UPDATE_SUCCESS',
  resolve => (purchase: Purchase) => resolve({ purchase }));
export const updateFailure = createActionCreator('PURCHASE_UPDATE_FAILURE');

// Actions for deleting purchase
export const deletePending = createActionCreator('PURCHASE_DELETE_PENDING');
export const deleteSuccess = createActionCreator('PURCHASE_DELETE_SUCCESS',
  resolve => (purchase: Purchase) => resolve({ purchase }));
export const deleteFailure = createActionCreator('PURCHASE_DELETE_FAILURE');

const router = RestRouter.getInstance();

/* ASYNC ACTIONS
  1. Notify Redux about the beginnig of outside request.
  2. Send outside request.
  3. In case of success notify Redux and dispatch data from response.
  4. In case of failure notify Redux.
*/

export const createPurchase = (purchase: Purchase) => async (dispatch: any) => {
  // First dispatch penging state
  dispatch(createPending());
  try {
    const url = router.purchasesUrl();
    const response = await axios.post(url, { ...purchase });
    // In case of success dispatch success state
    dispatch(createSuccess(response.data));
  } catch (e) {
    // In case of failure dispatch failure state
    dispatch(createFailure());
    throw new Error(`Error during creting purchase: ${e}`);
  }
};

export const readPurchase = (id: string) => async (dispatch: any) => {
  dispatch(readPending());
  try {
    const url = router.purchasesUrl(id);
    const response = await axios.get(url);
    dispatch(readSuccess(response.data));
  } catch (e) {
    dispatch(readFailure());
    throw new Error(`Error during reading purchase with id "${id}": ${e}`);
  }
};

export const readPurchases = () => async (dispatch: any) => {
  dispatch(readPending());
  try {
    const url = router.purchasesUrl();
    const response = await axios.get(url);
    dispatch(readSuccess(response.data));
  } catch (e) {
    dispatch(readFailure());
    throw new Error(`Error during reading purchases: ${e}`);
  }
};

export const updatePurchase = (purchase: Purchase) => async (dispatch: any) => {
  dispatch(updatePending());
  try {
    const url = router.purchasesUrl(purchase.id);
    const response = await axios.patch(url, { ...purchase });
    dispatch(updateSuccess(response.data));
  } catch (e) {
    dispatch(updateFailure());
    throw new Error(`Error during updating purchase with id "${purchase.id}": ${e}`);
  }
};

export const deletePurchase = (id: string) => async (dispatch: any) => {
  dispatch(deletePending());
  try {
    const url = router.purchasesUrl(id);
    const response = await axios.delete(url);
    dispatch(deleteSuccess(response.data));
  } catch (e) {
    dispatch(deleteFailure());
    throw new Error(`Error during deleting purchase with id "${id}}": ${e}`);
  }
};