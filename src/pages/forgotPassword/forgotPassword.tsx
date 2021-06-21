import { useEffect } from 'react';
import { Box, Grid } from '@material-ui/core';
import { Email } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import { FormProvider, useForm } from 'react-hook-form';
import Button from 'src/components/button';
import FormCard from 'src/components/formCard';
import EmailFormField from 'src/components/formFields/emailFormField';
import Layout from 'src/components/layout';
import useForgotPassword from 'src/hooks/useForgotPassword';
import useYupResolver from 'src/hooks/useYupResolver';
import { i18nKey } from 'src/locales/i18n';
import { Props } from './props';
import useStyles from './styles';
import {
  ForgotPasswordFormValue,
  forgotPasswordFormSchema,
} from './validation';

const ForgotPassword = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { forgotPassword } = useForgotPassword();
  const resolver = useYupResolver(forgotPasswordFormSchema);
  const methods = useForm({ resolver });
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    const initialValue: ForgotPasswordFormValue = {
      email: '',
    };
    reset(initialValue);
  }, [reset]);

  const onSubmit = async (values: ForgotPasswordFormValue) => {
    await forgotPassword(values.email);
  };

  return (
    <Layout>
      <FormCard title={i18nKey.forgot_password}>
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

            <Box mt={4}>
              <Button type='submit' variant='contained' color='primary'>
                {t(i18nKey.reset_password)}
              </Button>
            </Box>
          </form>
        </FormProvider>
      </FormCard>
    </Layout>
  );
};

export default ForgotPassword;
