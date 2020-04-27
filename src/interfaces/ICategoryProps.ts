import { IBaseProps } from './IBaseProps';
import { Category } from '../classes/Category';

export interface ICategoryProps extends IBaseProps {
    // TODO: how type this?
    createCategory?: any;
    readCategories?: any;
    updateCategory?: any;
    deleteCategory?: any;
    category?: Category;
    categories?: Category[];
}