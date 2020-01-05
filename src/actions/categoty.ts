import { createActionCreator } from 'deox';

export const addCategory = createActionCreator('CATEGORY_ADD');
export const updateCategory = createActionCreator('CATEGORY_UPDATE');
export const deleteCategory = createActionCreator('CATEGORY_DELETE');