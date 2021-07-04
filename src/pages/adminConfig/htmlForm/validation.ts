import { otherSchema } from 'src/utils/validation';
import * as yup from 'yup';

export interface HtmlFormValue {
  html: string;
}

export const htmlFormSchema = yup.object().shape({
  html: otherSchema,
});
