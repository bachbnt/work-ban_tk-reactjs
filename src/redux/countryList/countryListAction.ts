import { Country } from 'src/models/country';

export const SET_COUNTRY_LIST = 'SET_COUNTRY_LIST';

export interface SetCountryListAction {
  type: typeof SET_COUNTRY_LIST;
  payload: { data: Country[]; total: number };
}

export type CountryListAction = SetCountryListAction;
