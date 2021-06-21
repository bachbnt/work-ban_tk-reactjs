import { useEffect } from 'react';
import { Box, Grid } from '@material-ui/core';
import { Email, Lock } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FormProvider, useForm } from 'react-hook-form';
import { startCase } from 'lodash';
import Button from 'src/components/button';
import FormCard from 'src/components/formCard';
import EmailFormField from 'src/components/formFields/emailFormField';
import PasswordFormField from 'src/components/formFields/passwordFormField';
import Layout from 'src/components/layout';
import Logo from 'src/components/logo';
import useSignIn from 'src/hooks/useSignIn';
import useYupResolver from 'src/hooks/useYupResolver';
import { RouteName } from 'src/routes/routeName';
import { i18nKey } from 'src/locales/i18n';
import { Props } from './props';
import useStyles from './styles';
import { SignInFormValue, signInFormSchema } from './validation';

const SignIn = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { signIn } = useSignIn();
  const resolver = useYupResolver(signInFormSchema);
  const methods = useForm({ resolver });
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    const initialValue: SignInFormValue = {
      email: 'bach@gmail.com',
      password: 'Abc@123',
    };
    reset(initialValue);
  }, [reset]);

  const onSubmit = async (values: SignInFormValue) => {
    await signIn(values.email, values.password);
  };

  return (
    <Layout>
      <FormCard>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box mb={8}>
              <Logo />
            </Box>

            <Grid container spacing={1}>
              <Grid item>
                <Box mt={5}>
                  <Email />
                </Box>
              </Grid>
              <Grid item xs>
                <EmailFormField />
              </Grid>
            </Grid>

            <Grid container spacing={1}>
              <Grid item>
                <Box mt={5}>
                  <Lock />
                </Box>
              </Grid>
              <Grid item xs>
                <PasswordFormField />
              </Grid>
            </Grid>

            <Box textAlign='right' mt={2}>
              <Link className={classes.link} to={RouteName.FORGOT_PASSWORD}>
                {`${startCase(t(i18nKey.forgot_password))}?`}
              </Link>
            </Box>

            <Box mt={4}>
              <Button type='submit' variant='contained' color='primary'>
                {t(i18nKey.sign_in)}
              </Button>
            </Box>

            <Box mt={4}>
              {t(i18nKey.dont_have_an_account)}{' '}
              <Link className={classes.link} to={RouteName.SIGN_UP}>
                {startCase(t(i18nKey.sign_up))}
              </Link>
            </Box>
          </form>
        </FormProvider>
      </FormCard>
    </Layout>
  );
};

export default SignIn;
