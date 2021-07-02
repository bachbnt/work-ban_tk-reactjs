export const SET_CATEGORY = 'SET_CATEGORY';

export interface SetCategoryAction {
  type: typeof SET_CATEGORY;
  payload: { id: string; name: string };
}

export type CategoryAction = SetCategoryAction;
