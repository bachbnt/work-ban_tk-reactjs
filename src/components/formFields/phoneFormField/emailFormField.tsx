import TextFormField from 'src/components/formFields/textFormField';
import { i18nKey } from 'src/locales/i18n';
import { Props } from './props';

const PhoneFormField = (props: Props) => {
  const { name = 'phone', ...others } = props;

  return <TextFormField name={name} label={i18nKey.phone_number} {...others} />;
};

export default PhoneFormField;
