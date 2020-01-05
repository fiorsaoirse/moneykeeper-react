import { createReducer } from 'deox';
import * as actions from '../actions/categoty';
import { Category } from '../classes/Category';
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

const categoryReducer = createReducer(defaultState, handleAction => [
    handleAction(actions.addCategory, (state,  action: { type: string, payload: any }) => {
        const { byId, allIds } = state;
        const { category }: { category: Category} = action.payload;
        return {
            byId: { ...byId, [category.id]: category },
            allIds: [category.id, ...allIds],
        };
    }),
    handleAction(actions.updateCategory, (state,  action: { type: string, payload: any }) => {
        const { byId, allIds } = state;
        const { category }: { category: Category} = action.payload;
        return {
            byId: update(byId, { [category.id]: { $set: category } }),
            allIds,
        };
    }),
    handleAction(actions.deleteCategory, (state,  action: { type: string, payload: any }) => {
        const { byId, allIds } = state;
        const { id }: { id: string } = action.payload;
        return {
            byId: omit(byId, [id]),
            allIds: allIds.filter((fId: string) => fId !== id),
        };
    }),
  ]);

export default categoryReducer;