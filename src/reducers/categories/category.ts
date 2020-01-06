import { createReducer } from 'deox';
import * as actions from '../../actions/category';
import { Category } from '../../classes/Category';
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

export default createReducer(defaultState, handleAction => [
    handleAction(actions.addCategoriesSuccess, (state,  action: { type: string, payload: any }) => {
        const { byId, allIds } = state;
        const { category }: { category: Category} = action.payload;
        return {
            byId: { ...byId, [category.id]: category },
            allIds: [category.id, ...allIds],
        };
    }),
    handleAction(actions.updateCategoriesSuccess, (state,  action: { type: string, payload: any }) => {
        const { byId, allIds } = state;
        const { category }: { category: Category} = action.payload;
        return {
            byId: update(byId, { [category.id]: { $set: category } }),
            allIds,
        };
    }),
    handleAction(actions.removeCategoriesSuccess, (state,  action: { type: string, payload: any }) => {
        const { byId, allIds } = state;
        const { category }: { category: Category } = action.payload;
        return {
            byId: omit(byId, [category.id]),
            allIds: allIds.filter((fId: string) => fId !== category.id),
        };
    }),
  ]);
