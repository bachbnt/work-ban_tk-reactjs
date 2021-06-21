import { useEffect } from 'react';
import { Box, Grid, Paper, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { FormProvider, useForm } from 'react-hook-form';
import { startCase } from 'lodash';
import Button from 'src/components/button';
import PasswordFormField from 'src/components/formFields/passwordFormField';
import useChangePassword from 'src/hooks/useChangePassword';
import useYupResolver from 'src/hooks/useYupResolver';
import { i18nKey } from 'src/locales/i18n';
import { Props } from './props';
import useStyles from './styles';
import { PasswordFormFormValue, passwordFormFormSchema } from './validation';

const PasswordForm = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { changePassword } = useChangePassword();
  const resolver = useYupResolver(passwordFormFormSchema);
  const methods = useForm({ resolver });
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    const initialValue: PasswordFormFormValue = {
      currentPassword: '',
      password: '',
      confirmPassword: '',
    };
    reset(initialValue);
  }, [reset]);

  const onSubmit = async (values: PasswordFormFormValue) => {
    await changePassword(values.currentPassword, values.password);
  };

  return (
    <Paper elevation={1} classes={{ root: classes.paper }}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box px={3} py={3}>
            <Box mb={5} className={classes.title}>
              <Typography variant='h2' color='primary'>
                {startCase(t(i18nKey.password))}
              </Typography>
            </Box>
            <Grid container>
              <Grid item xs={12} md={4}>
                <Box className={classes.fieldContainer}>
                  <PasswordFormField
                    name={'currentPassword'}
                    label={t(i18nKey.current_password)}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box className={classes.fieldContainer}>
                  <PasswordFormField />
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box className={classes.fieldContainer}>
                  <PasswordFormField
                    name={'confirmPassword'}
                    label={t(i18nKey.confirm_password)}
                  />
                </Box>
              </Grid>
            </Grid>
            <Box mt={4} className={classes.button}>
              <Button type='submit' variant='contained' color='primary'>
                {startCase(t(i18nKey.save))}
              </Button>
            </Box>
          </Box>
        </form>
      </FormProvider>
    </Paper>
  );
};

export default PasswordForm;
