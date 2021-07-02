import { Country } from 'src/models/country';

export type CountryListState = { data: Country[]; total: number } | null;

export const initialState: CountryListState = { data: [], total: 1 };
