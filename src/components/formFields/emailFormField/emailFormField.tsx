import TextFormField from 'src/components/formFields/textFormField';
import { i18nKey } from 'src/locales/i18n';
import { Props } from './props';

const EmailFormField = (props: Props) => {
  const { name = 'email', ...others } = props;

  return (
    <TextFormField
      name={name}
      label={i18nKey.email_address}
      autoComplete='email'
      {...others}
    />
  );
};

export default EmailFormField;
