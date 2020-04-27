import { createReducer } from 'deox';
import * as actions from '../../actions/category';
import { Category } from '../../../classes/Category';
import update from 'immutability-helper';
import { keyBy, omit } from 'lodash';
import { defaultStateType } from '../defaultStateType';

// define default state
const defaultState: defaultStateType = {
    byId: {},
    allIds: [],
};

// Purchase reducer describe possible state actions with changing categories
export default createReducer(defaultState, handleAction => [
    // CREATE reducer
    handleAction(actions.createSuccess, (state, action: { type: string, payload: any }) => {
        const { byId, allIds } = state;
        const { category }: { category: Category } = action.payload;
        return {
            byId: { ...byId, [category.id]: category },
            allIds: [category.id, ...allIds],
        };
    }),
    // READ reducer
    handleAction(actions.readSuccess, (_state, action: { type: string, payload: any }) => {
        const { categories }: { categories: Category[] } = action.payload;
        return {
            byId: keyBy(categories, 'id'),
            allIds: categories.map((c: Category) => c.id),
        };
    }),
    // UPDATE reducer
    handleAction(actions.updateSuccess, (state, action: { type: string, payload: any }) => {
        const { byId, allIds } = state;
        const { category }: { category: Category } = action.payload;
        return {
            byId: update(byId, { [category.id]: { $set: category } }),
            allIds,
        };
    }),
    // DELETE
    handleAction(actions.deleteSuccess, (state, action: { type: string, payload: any }) => {
        const { byId, allIds } = state;
        const { category }: { category: Category } = action.payload;
        return {
            byId: omit(byId, [category.id]),
            allIds: allIds.filter((fId: string) => fId !== category.id),
        };
    }),
]);
