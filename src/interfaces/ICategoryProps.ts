import { IBaseProps } from './IBaseProps';
import { Category } from '../classes/Category';

export interface ICategoryProps extends IBaseProps {
    category?: Category;
    categories?: Category[];
    addCategory?: any;
    fetchCategory?: any;
    fetchCategories?: any;
    deleteCategory?: any;
}