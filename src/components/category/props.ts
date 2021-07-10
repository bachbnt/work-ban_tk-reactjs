import { Category } from 'src/models/category';

export interface Props {
  data: Category;
  onDeleted: () => void;
}
