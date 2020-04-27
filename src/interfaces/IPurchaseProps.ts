import { IBaseProps } from './IBaseProps';
import { Purchase } from '../classes/Purchase';

export interface IPurchaseProps extends IBaseProps {
    // TODO: how type this?
    createPurchase?: any;
    readPurchases?: any;
    updatePurchase?: any;
    deletePurchase?: any;
    purchase?: Purchase;
    purchases?: Purchase[];
}