import { CountryListAction, SET_COUNTRY_LIST } from './countryListAction';
import { CountryListState, initialState } from './countryListState';

export const countryListReducer = (
  state: CountryListState = initialState,
  action: CountryListAction
): CountryListState => {
  switch (action.type) {
    case SET_COUNTRY_LIST:
      return action.payload;
    default:
      return state;
  }
};
