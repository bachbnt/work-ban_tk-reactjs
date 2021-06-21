import TextFormField from 'src/components/formFields/textFormField';
import { i18nKey } from 'src/locales/i18n';
import { Props } from './props';

const UsernameFormField = (props: Props) => {
  const { name = 'username', ...others } = props;

  return <TextFormField name={name} label={i18nKey.username} {...others} />;
};

export default UsernameFormField;
