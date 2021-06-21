import { useState } from 'react';
import {
  IconButton,
  InputAdornment as MaterialInputAdornment,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import TextFormField from 'src/components/formFields/textFormField';
import { i18nKey } from 'src/locales/i18n';
import { Props } from './props';

const PasswordFormField = (props: Props) => {
  const { name = 'password', ...others } = props;

  const [visible, setVisible] = useState(false);

  const handleClickEye = () => {
    setVisible(!visible);
  };

  const InputAdornment = (
    <MaterialInputAdornment position='end'>
      <IconButton onClick={handleClickEye}>
        {visible ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </MaterialInputAdornment>
  );

  return (
    <TextFormField
      name={name}
      label={i18nKey.password}
      type={visible ? 'text' : 'password'}
      autoComplete='current-password'
      InputProps={{ endAdornment: InputAdornment }}
      {...others}
    />
  );
};

export default PasswordFormField;
