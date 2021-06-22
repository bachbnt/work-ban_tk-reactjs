import { TOGGLE_API, ApiDialogAction } from './apiDialogAction';
import { ApiDialogState, initialState } from './apiDialogState';

export const apiDialogReducer = (
  state: ApiDialogState = initialState,
  action: ApiDialogAction
): ApiDialogState => {
  switch (action.type) {
    case TOGGLE_API:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};
