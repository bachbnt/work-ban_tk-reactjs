import { otherSchema } from 'src/utils/validation';
import * as yup from 'yup';

export interface AdminAddProductFormValue {
  countryName: string;
  countryCode: string;
  unitPrice: number;
  image: string;
  describe: string;
}

export const adminAddProductFormSchema = yup.object().shape({
  countryName: otherSchema,
  countryCode: otherSchema,
  unitPrice: yup.number().required('Không được trống'),
  image: otherSchema,
  describe: otherSchema,
});
