import { Purchase } from '../classes/Purchase';

import { Category } from '../classes/Category';

export interface IState {
    purchases: {
        purchasesAddState: string;
        purchasesFetchState: string;
        purchasesRemoveState: string;
        purchasesUpdateState: string;
        purchases: {
            byId: { [key: string]: Purchase },
            allIds: string[],
        },

    };
    categories: {
        categoriesAddState: string;
        categoriesFetchState: string;
        categoriesRemoveState: string;
        categoriesUpdateState: string;
        categories: {
            byId: { [key: string]: Category },
            allIds: string[],
        },
    };
}