import { createAction } from 'redux-actions';

const addPurchase = createAction('PURCHASE_ADD');
const updatePurchase = createAction('PURCHASE_UPDATE');
const deletePurchase = createAction('PURCHASE_DELETE');