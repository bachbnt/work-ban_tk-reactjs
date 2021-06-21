import { useCallback, useEffect } from 'react';
import { Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { FormProvider, useForm } from 'react-hook-form';
import useYupResolver from 'src/hooks/useYupResolver';
import { Props } from './props';
import useStyles from './styles';
import { SignInDialogFormValue, signInDialogFormSchema } from './validation';
import { Dialog } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import PasswordFormField from '../formFields/passwordFormField';
import Button from '../button';
import UsernameFormField from '../formFields/usernameFormField';
import useSignIn from 'src/hooks/useSignIn';

const SignInDialog = (props: Props) => {
  const classes = useStyles();
  const { onClose, open } = props;
  const { t } = useTranslation();
  const resolver = useYupResolver(signInDialogFormSchema);
  const methods = useForm({ resolver });
  const { handleSubmit, reset } = methods;
  const { signIn } = useSignIn();

  useEffect(() => {
    const initialValue: SignInDialogFormValue = {
      username: '',
      password: '',
    };
    reset(initialValue);
  }, [reset]);

  const onSubmit = useCallback(
    async (values: SignInDialogFormValue) => {
      await signIn(values.username, values.password);
    },
    [signIn]
  );

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Đăng nhập</DialogTitle>
      <Box className={classes.container}>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <UsernameFormField />
            <PasswordFormField />

            <Box mt={4} textAlign='center'>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                className={classes.button}>
                Đăng nhập
              </Button>
            </Box>
          </form>
        </FormProvider>
      </Box>
    </Dialog>
  );
};

export default SignInDialog;
