import { createActionCreator } from 'deox';
import axios from 'axios';
import RestRouter from '../restRoutes';
import { Category } from '../classes/Category';

// Action for creating category
export const addCategoriesSuccess = createActionCreator('CATEGORIES_ADD_SUCCESS',
  resolve => (category: Category) => resolve({ category }));

// Actions for reading category
export const fetchCategoriesRequest = createActionCreator('CATEGORIES_FETCH_REQUEST');
export const fetchCategoriesSuccess = createActionCreator('CATEGORIES_FETCH_SUCCESS',
  resolve => (categories: Category[]) => resolve({ categories }));
export const fetchCategoriesFailure = createActionCreator('CATEGORIES_FETCH_FAILURE');

// Actions for updating category
export const updateCategoriesRequest = createActionCreator('CATEGORIES_UPDATE_REQUEST');
export const updateCategoriesSuccess = createActionCreator('CATEGORIES_UPDATE_SUCCESS',
  resolve => (category: Category) => resolve({ category }));
export const updateCategoriesFailure = createActionCreator('CATEGORIES_UPDATE_FAILURE');

// Actions for deleting category
export const removeCategoriesRequest = createActionCreator('CATEGORIES_REMOVE_REQUEST');
export const removeCategoriesSuccess = createActionCreator('CATEGORIES_REMOVE_SUCCESS',
  resolve => (category: Category) => resolve({ category }));
export const removeCategoriesFailure = createActionCreator('CATEGORIES_REMOVE_FAILURE');

const router = RestRouter.getInstance();

export const addPurchase = ({ category }: { category: Category }) => async (dispatch: (arg0: { type: 'CATEGORIES_ADD_SUCCESS'; payload: { category: Category; }; }) => void) => {
  const response = await axios.post(router.categoriesUrl(), { ...category });
  dispatch(addCategoriesSuccess(response.data));
};

export const fetchCategory = (id: string) => async (dispatch: (arg0: { type: 'CATEGORIES_FETCH_REQUEST' | 'CATEGORIES_FETCH_SUCCESS' | 'CATEGORIES_FETCH_FAILURE'; payload?: { categories: Category[]; }; }) => void) => {
  dispatch(fetchCategoriesRequest());
  try {
    const url = router.categoriesUrl(id);
    const response = await axios.get(url);
    dispatch(fetchCategoriesSuccess(response.data));
  } catch (e) {
    dispatch(fetchCategoriesFailure());
    throw e;
  }
};

export const fetchCategories = () => async (dispatch: (arg0: { type: 'CATEGORIES_FETCH_REQUEST' | 'CATEGORIES_FETCH_SUCCESS' | 'CATEGORIES_FETCH_FAILURE'; payload?: { categories: Category[]; }; }) => void) => {
  dispatch(fetchCategoriesRequest());
  try {
    const url = router.categoriesUrl();
    const response = await axios.get(url);
    dispatch(fetchCategoriesSuccess(response.data));
  } catch (e) {
    dispatch(fetchCategoriesFailure());
    throw e;
  }
};

export const updateCategory = ({ id, category }: { id: string, category: Category }) => async (dispatch: (arg0: { type: 'CATEGORIES_UPDATE_REQUEST' | 'CATEGORIES_UPDATE_SUCCESS' | 'CATEGORIES_UPDATE_FAILURE'; payload?: { category: Category; }; }) => void) => {
  dispatch(updateCategoriesRequest());
  try {
    const url = router.categoriesUrl(id);
    const response = await axios.patch(url, { ...category });
    dispatch(updateCategoriesSuccess(response.data));
  } catch (e) {
    dispatch(updateCategoriesFailure());
    throw e;
  }
};

export const deleteCategory = (id: string) => async (dispatch: (arg0: { type: 'CATEGORIES_REMOVE_REQUEST' | 'CATEGORIES_REMOVE_SUCCESS' | 'CATEGORIES_REMOVE_FAILURE'; payload?: { category: Category; }; }) => void) => {
  dispatch(removeCategoriesRequest());
  try {
    const url = router.categoriesUrl(id);
    const response = await axios.delete(url);
    dispatch(removeCategoriesSuccess(response.data));
  } catch (e) {
    dispatch(removeCategoriesFailure());
    throw e;
  }
};