import { createReducer } from 'deox';
import * as actions from '../../actions/purchase';
import { Purchase } from '../../../classes/Purchase';
import update from 'immutability-helper';
import { keyBy, omit } from 'lodash';
import { defaultStateType } from '../defaultStateType';

// define default state
const defaultState: defaultStateType = {
    byId: {},
    allIds: [],
};

// Purchase reducer describe possible state actions with changing purchases
export default createReducer(defaultState, handleAction => [
    // CREATE reducer
    handleAction(actions.createSuccess, (state, action: { type: string, payload: any }) => {
        const { byId, allIds } = state;
        const { purchase }: { purchase: Purchase } = action.payload;
        return {
            byId: { ...byId, [purchase.id]: purchase },
            allIds: [purchase.id, ...allIds],
        };
    }),
    // READ reducer
    handleAction(actions.readSuccess, (_state, action: { type: string, payload: any }) => {
        const { purchases }: { purchases: Purchase[] } = action.payload;
        return {
            byId: keyBy(purchases, 'id'),
            allIds: purchases.map((p: Purchase) => p.id),
        };
    }),
    // UPDATE reducer
    handleAction(actions.updateSuccess, (state, action: { type: string, payload: any }) => {
        const { byId, allIds } = state;
        const { purchase }: { purchase: Purchase } = action.payload;
        return {
            byId: update(byId, { [purchase.id]: { $set: purchase } }),
            allIds,
        };
    }),
    // DELETE
    handleAction(actions.deleteSuccess, (state, action: { type: string, payload: any }) => {
        const { byId, allIds } = state;
        const { purchase }: { purchase: Purchase } = action.payload;
        return {
            byId: omit(byId, [purchase.id]),
            allIds: allIds.filter((fId: string) => fId !== purchase.id),
        };
    }),
]);
