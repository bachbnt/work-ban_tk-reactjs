import { useEffect } from 'react';
import { Box, Grid } from '@material-ui/core';
import { Email, Lock, Person } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FormProvider, useForm } from 'react-hook-form';
import { startCase } from 'lodash';
import Button from 'src/components/button';
import FormCard from 'src/components/formCard';
import EmailFormField from 'src/components/formFields/emailFormField';
import PasswordFormField from 'src/components/formFields/passwordFormField';
import TextFormField from 'src/components/formFields/textFormField';
import Layout from 'src/components/layout';
import { i18nKey } from 'src/locales/i18n';
import { RouteName } from 'src/routes/routeName';
import useSignUp from 'src/hooks/useSignUp';
import useYupResolver from 'src/hooks/useYupResolver';
import { Props } from './props';
import useStyles from './styles';
import { SignUpFormValue, signUpFormSchema } from './validation';

const SignUp = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { signUp } = useSignUp();
  const resolver = useYupResolver(signUpFormSchema);
  const methods = useForm({ resolver });
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    const initialValue: SignUpFormValue = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
    };
    reset(initialValue);
  }, [reset]);

  const onSubmit = async (values: SignUpFormValue) => {
    await signUp(
      values.email,
      values.firstName,
      values.lastName,
      values.password
    );
  };

  return (
    <Layout>
      <FormCard title={i18nKey.sign_up}>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                  <Person />
                </Box>
              </Grid>
              <Grid item xs>
                <TextFormField name='firstName' label={t(i18nKey.first_name)} />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item>
                <Box mt={5}>
                  <Person />
                </Box>
              </Grid>
              <Grid item xs>
                <TextFormField name='lastName' label={t(i18nKey.last_name)} />
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

            <Grid container spacing={1}>
              <Grid item>
                <Box mt={5}>
                  <Lock />
                </Box>
              </Grid>
              <Grid item xs>
                <PasswordFormField
                  name='confirmPassword'
                  label={t(i18nKey.confirm_password)}
                />
              </Grid>
            </Grid>

            <Box mt={2}>
              {t(i18nKey.by_clicking_sign_up_you_agree_to_our)}
              <br />
              <Link className={classes.link} to=''>
                {startCase(t(i18nKey.term_of_service))}
              </Link>{' '}
              {t(i18nKey.and)}{' '}
              <Link className={classes.link} to=''>
                {startCase(t(i18nKey.privacy_policy))}
              </Link>
            </Box>

            <Box mt={4}>
              <Button type='submit' variant='contained' color='primary'>
                {t(i18nKey.sign_up)}
              </Button>
            </Box>

            <Box mt={4}>
              {t(i18nKey.already_have_an_account)}{' '}
              <Link className={classes.link} to={RouteName.SIGN_IN}>
                {startCase(t(i18nKey.sign_in))}
              </Link>
            </Box>
          </form>
        </FormProvider>
      </FormCard>
    </Layout>
  );
};

export default SignUp;
