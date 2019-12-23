import { omit } from 'lodash';

const reducer = (state = {}, action: { type: string, payload: any }) => {
    switch (action.type) {
        case 'CATEGORY_ADD': {
            const { category } = action.payload;
            return ({ ...state, [category.id]: category });
        }
        case 'CATEGORY_REMOVE': {
            const { id } = action.payload;
            return omit(state, [id]);
        }
        default:
            return state;
    }
};

export default reducer;