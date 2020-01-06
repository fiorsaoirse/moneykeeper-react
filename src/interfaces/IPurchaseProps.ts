import { IBaseProps } from './IBaseProps';
import { Purchase } from '../classes/Purchase';

export interface IPurchaseProps extends IBaseProps {
    purchase?: Purchase;
    purchases?: Purchase[];
    addPurchase?: any;
    fetchPurchase?: any;
    fetchPurchases?: any;
    deletePurchase?: any;
}