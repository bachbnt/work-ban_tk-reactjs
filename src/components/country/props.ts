import { Country } from 'src/models/country';

export interface Props {
  data: Country;
  onDeleted: () => void;
  onUpdated: () => void;
}
