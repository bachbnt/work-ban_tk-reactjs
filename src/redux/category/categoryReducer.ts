import { SET_CATEGORY, CategoryAction } from './cateroryAction';
import { CategoryState, initialState } from './categoryState';

export const categoryReducer = (
  state: CategoryState = initialState,
  action: CategoryAction
): CategoryState => {
  switch (action.type) {
    case SET_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};
