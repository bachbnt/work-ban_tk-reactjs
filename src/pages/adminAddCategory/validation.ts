import { otherSchema } from 'src/utils/validation';
import * as yup from 'yup';

export interface AdminAddCategoryFormValue {
  name: string;
}

export const adminAddCategoryFormSchema = yup.object().shape({
  name: otherSchema,
});
