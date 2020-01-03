import { createReducer } from 'deox'
import * as actions from '../actions/purchase';
import { Purchase } from '../classes/Purchase';
import update from 'immutability-helper';
import { omit } from 'lodash';

// define default state
const defaultState: {
    byId: {},
    allIds: string[],
} = {
    byId: {},
    allIds: [],
};

const purchaseReducer = createReducer(defaultState, handleAction => [
    handleAction(actions.addPurchase, (state,  action: { type: string, payload: any }) => {
        const { byId, allIds } = state;
        const { purchase } : { purchase: Purchase} = action.payload;
        return {
            byId: { ...byId, [purchase.id]: purchase },
            allIds: [purchase.id, ...allIds],
        }
    }),
    handleAction(actions.updatePurchase, (state,  action: { type: string, payload: any }) => {
        const { byId, allIds } = state;
        const { purchase } : { purchase: Purchase} = action.payload;
        return {
            byId: update(byId, { [purchase.id]: { $set: purchase } }),
            allIds,
        };
    }),
    handleAction(actions.deletePurchase, (state,  action: { type: string, payload: any }) => {
        const { byId, allIds } = state;
        const { id }: { id: string } = action.payload;
        return {
            byId: omit(byId, [id]),
            allIds: allIds.filter((fId: string) => fId !== id),
        }
    }),
  ])

export default purchaseReducer;