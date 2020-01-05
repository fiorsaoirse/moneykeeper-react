import { createActionCreator } from 'deox';
import axios from 'axios';
import RestRouter from '../restRoutes';
import { Purchase } from '../classes/Purchase';

// Action for creating purchase
export const addPurchaseSuccess = createActionCreator('PURCHASE_ADD_SUCCESS',
  resolve => (purchase: Purchase) => resolve({ purchase }));


// Actions for reading purchses
export const fetchPurchasesRequest = createActionCreator('PURCHASES_FETCH_REQUEST');
export const fetchPurchasesSuccess = createActionCreator('PURCHASES_FETCH_SUCCESS',
  resolve => (purchases: Purchase[]) => resolve({ purchases }));
export const fetchPurchasesFailure = createActionCreator('PURCHASES_FETCH_FAILURE');

// Actions for updating purchase
export const updatePurchaseRequest = createActionCreator('PURCHASE_UPDATE_REQUEST');
export const updatePurchaseSuccess = createActionCreator('PURCHASE_UPDATE_SUCCESS',
  resolve => (purchase: Purchase) => resolve({ purchase }));
export const updatePurchaseFailure = createActionCreator('PURCHASE_UPDATE_FAILURE');

// Actions for deleting purchase
export const removePurchaseRequest = createActionCreator('PURCHASE_REMOVE_REQUEST');
export const removePurchaseSuccess = createActionCreator('PURCHASE_REMOVE_SUCCESS',
  resolve => (purchase: Purchase) => resolve({ purchase }));
export const removePurchaseFailure = createActionCreator('PURCHASE_REMOVE_FAILURE');

const router = RestRouter.getInstance();

export const addPurchase = ({ purchase }: { purchase: Purchase }) => async (dispatch: (arg0: { type: 'PURCHASE_ADD_SUCCESS'; payload: { purchase: Purchase; }; }) => void) => {
  const response = await axios.post(router.purchasesUrl(), { ...purchase });
  dispatch(addPurchaseSuccess(response.data));
};

export const fetchPurchase = (id: number) => async (dispatch: (arg0: { type: 'PURCHASES_FETCH_REQUEST' | 'PURCHASES_FETCH_SUCCESS' | 'PURCHASES_FETCH_FAILURE'; payload?: { purchases: Purchase[]; }; }) => void) => {
  dispatch(fetchPurchasesRequest());
  try {
    const url = router.purchasesUrl(id);
    const response = await axios.get(url);
    dispatch(fetchPurchasesSuccess(response.data));
  } catch (e) {
    dispatch(fetchPurchasesFailure());
    throw e;
  }
};

export const fetchPurchases = () => async (dispatch: (arg0: { type: 'PURCHASES_FETCH_REQUEST' | 'PURCHASES_FETCH_SUCCESS' | 'PURCHASES_FETCH_FAILURE'; payload?: { purchases: Purchase[]; }; }) => void) => {
  dispatch(fetchPurchasesRequest());
  try {
    const url = router.purchasesUrl();
    const response = await axios.get(url);
    dispatch(fetchPurchasesSuccess(response.data));
  } catch (e) {
    dispatch(fetchPurchasesFailure());
    throw e;
  }
};

export const updatePurchase = ({ id, purchase }: { id: number, purchase: Purchase }) => async (dispatch: (arg0: { type: 'PURCHASE_UPDATE_REQUEST' | 'PURCHASE_UPDATE_SUCCESS' | 'PURCHASE_UPDATE_FAILURE'; payload?: { purchase: Purchase; } }) => void) => {
  dispatch(updatePurchaseRequest());
  try {
    const url = router.purchasesUrl(id);
    const response = await axios.patch(url, { ...purchase });
    dispatch(updatePurchaseSuccess(response.data));
  } catch (e) {
    dispatch(updatePurchaseFailure());
    throw e;
  }
};

export const deletePurchase = (id: number) => async (dispatch: (arg0: { type: 'PURCHASE_REMOVE_REQUEST' | 'PURCHASE_REMOVE_SUCCESS' | 'PURCHASE_REMOVE_FAILURE'; payload?: { purchase: Purchase; }; }) => void) => {
  dispatch(removePurchaseRequest());
  try {
    const url = router.purchasesUrl(id);
    const response = await axios.delete(url);
    dispatch(removePurchaseSuccess(response.data));
  } catch (e) {
    dispatch(removePurchaseFailure());
    throw e;
  }
};