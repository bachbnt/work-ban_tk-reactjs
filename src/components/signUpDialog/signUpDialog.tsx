import { useCallback, useEffect } from 'react';
import { Box, Dialog } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { FormProvider, useForm } from 'react-hook-form';
import useYupResolver from 'src/hooks/useYupResolver';
import { Props } from './props';
import useStyles from './styles';
import { SignUpDialogFormValue, signUpDialogFormSchema } from './validation';
import { DialogTitle } from '@material-ui/core';
import EmailFormField from '../formFields/emailFormField';
import PasswordFormField from '../formFields/passwordFormField';
import Button from '../button';
import UsernameFormField from '../formFields/usernameFormField';
import PhoneFormField from '../formFields/phoneFormField';
import useSignUp from 'src/hooks/useSignUp';

const SignUpDialog = (props: Props) => {
  const classes = useStyles();
  const { onClose, open } = props;
  const { t } = useTranslation();
  const resolver = useYupResolver(signUpDialogFormSchema);
  const methods = useForm({ resolver });
  const { handleSubmit, reset } = methods;
  const { signUp } = useSignUp();

  useEffect(() => {
    const initialValue: SignUpDialogFormValue = {
      username: '',
      email: '',
      phone: '',
      password: '',
    };
    reset(initialValue);
  }, [reset]);

  const onSubmit = useCallback(
    async (values: SignUpDialogFormValue) => {
      await signUp(
        values.username,
        values.email,
        values.phone,
        values.password
      );
    },
    [signUp]
  );

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Đăng ký</DialogTitle>
      <Box className={classes.container}>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <UsernameFormField />
            <EmailFormField />
            <PhoneFormField />
            <PasswordFormField />
            <Box mt={4} textAlign='center'>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                className={classes.button}>
                Đăng ký
              </Button>
            </Box>
          </form>
        </FormProvider>
      </Box>
    </Dialog>
  );
};

export default SignUpDialog;
