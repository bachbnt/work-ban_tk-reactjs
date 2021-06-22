import TextFormField from 'src/components/formFields/textFormField';
import { i18nKey } from 'src/locales/i18n';
import { Props } from './props';

const CodeFormField = (props: Props) => {
  const { name = 'code', ...others } = props;

  return <TextFormField name={name} label={i18nKey.code} {...others} />;
};

export default CodeFormField;
