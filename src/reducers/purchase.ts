import { omit } from 'lodash';

const reducer = (state = {}, action: { type: string, payload: any }) => {
    switch (action.type) {
        case 'PURCHASE_ADD': {
            const { purchase } = action.payload;
            return ({ ...state, [purchase.id]: purchase });
        }
        case 'PURCHASE_REMOVE': {
            const { id } = action.payload;
            return omit(state, [id]);
        }
        default:
            return state;
    }
};

export default reducer;