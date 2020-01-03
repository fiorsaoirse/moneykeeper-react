import { createActionCreator } from 'deox'

export const addPurchase = createActionCreator('PURCHASE_ADD');
export const updatePurchase = createActionCreator('PURCHASE_UPDATE');
export const deletePurchase = createActionCreator('PURCHASE_DELETE');