import { createActionCreator } from 'deox';
import axios from 'axios';
import RestRouter from '../../restRoutes';
import { Category } from '../../classes/Category';

/* ACTIONS AS FUNCTIONS */

// Action for creating category
export const createPending = createActionCreator('CATEGORY_CREATE_PENDING');
export const createSuccess = createActionCreator('CATEGORY_CREATE_SUCCESS',
  resolve => (category: Category) => resolve({ category }));
export const createFailure = createActionCreator('CATEGORY_CREATE_FAILURE');

// Actions for reading category
export const readPending = createActionCreator('CATEGORY_READ_PENDING');
export const readSuccess = createActionCreator('CATEGORY_READ_SUCCESS',
  resolve => (categories: Category[]) => resolve({ categories }));
export const readFailure = createActionCreator('CATEGORY_READ_FAILURE');

// Actions for updating category
export const updatePending = createActionCreator('CATEGORY_UPDATE_PENDING');
export const updateSuccess = createActionCreator('CATEGORY_UPDATE_SUCCESS',
  resolve => (category: Category) => resolve({ category }));
export const updateFailure = createActionCreator('CATEGORY_UPDATE_FAILURE');

// Actions for deleting category
export const deletePending = createActionCreator('CATEGORY_DELETE_PENDING');
export const deleteSuccess = createActionCreator('CATEGORY_DELETE_SUCCESS',
  resolve => (category: Category) => resolve({ category }));
export const deleteFailure = createActionCreator('CATEGORY_DELETE_FAILURE');

const router = RestRouter.getInstance();

/* ASYNC ACTIONS
  1. Notify Redux about the beginnig of outside request.
  2. Send outside request.
  3. In case of success notify Redux and dispatch data from response.
  4. In case of failure notify Redux.
*/

export const createCategory = (category: Category) => async (dispatch: any) => {
  // First dispatch penging state
  dispatch(createPending());
  try {
    const url = router.categoriesUrl();
    const response = await axios.post(url, { ...category });
    // In case of success dispatch success state
    dispatch(createSuccess(response.data));
  } catch (e) {
    // In case of failure dispatch failure state
    dispatch(createFailure());
    throw new Error(`Error during creting category: ${e}`);
  }
};

export const readCategory = (id: string) => async (dispatch: any) => {
  dispatch(readPending());
  try {
    const url = router.categoriesUrl(id);
    const response = await axios.get(url);
    dispatch(readSuccess(response.data));
  } catch (e) {
    dispatch(readFailure());
    throw new Error(`Error during reading category with id "${id}": ${e}`);
  }
};

export const readCategories = () => async (dispatch: any) => {
  dispatch(readPending());
  try {
    const url = router.categoriesUrl();
    const response = await axios.get(url);
    dispatch(readSuccess(response.data));
  } catch (e) {
    dispatch(readFailure());
    throw new Error(`Error during reading categories: ${e}`);
  }
};

export const updateCategory = (category: Category) => async (dispatch: any) => {
  dispatch(updatePending());
  try {
    const url = router.categoriesUrl(category.id);
    const response = await axios.patch(url, { ...category });
    dispatch(updateSuccess(response.data));
  } catch (e) {
    dispatch(updateFailure());
    throw new Error(`Error during updating category with id "${category.id}": ${e}`);
  }
};

export const deleteCategory = (id: string) => async (dispatch: any) => {
  dispatch(deletePending());
  try {
    const url = router.categoriesUrl(id);
    const response = await axios.delete(url);
    dispatch(deleteSuccess(response.data));
  } catch (e) {
    dispatch(deleteFailure());
    throw new Error(`Error during deleting category with id "${id}}": ${e}`);
  }
};