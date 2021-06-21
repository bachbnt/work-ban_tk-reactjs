import { useEffect } from 'react';
import { Box, Grid, Paper, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';
import { startCase } from 'lodash';
import AvatarPicker from 'src/components/avatarPicker';
import Button from 'src/components/button';
import DateFormField from 'src/components/formFields/dateFormField';
import TextFormField from 'src/components/formFields/textFormField';
import TextField from 'src/components/textField';
import useUpdateProfile from 'src/hooks/useUpdateProfile';
import useYupResolver from 'src/hooks/useYupResolver';
import { i18nKey } from 'src/locales/i18n';
import { RootState } from 'src/redux/rootState';
import { UserState } from 'src/redux/user/userState';
import { Props } from './props';
import useStyles from './styles';
import { ProfileFormFormValue, profileFormFormSchema } from './validation';

const ProfileForm = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { updateProfile } = useUpdateProfile();
  const resolver = useYupResolver(profileFormFormSchema);
  const methods = useForm({ resolver });
  const { handleSubmit, reset } = methods;
  const userReducer = useSelector<RootState, UserState>(
    (state) => state.userReducer
  );

  useEffect(() => {
    if (userReducer) {
      const { firstName, lastName, dateOfBirth } = userReducer;
      const initialValue: ProfileFormFormValue = {
        firstName,
        lastName,
        dateOfBirth: dateOfBirth?.toISOString() || '',
      };
      reset(initialValue);
    }
  }, [reset, userReducer]);

  const onSubmit = async (values: ProfileFormFormValue) => {
    await updateProfile(values.firstName, values.lastName, values.dateOfBirth);
  };

  return (
    <Paper elevation={1} classes={{ root: classes.paper }}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box px={3} py={3}>
            <Box mb={5} className={classes.title}>
              <Typography variant='h2' color='primary'>
                {startCase(t(i18nKey.profile))}
              </Typography>
            </Box>
            <AvatarPicker
              image={userReducer?.avatar}
              replacement={userReducer?.firstName}
            />
            <Grid container>
              <Grid item xs={12} md={4}>
                <Box className={classes.fieldContainer}>
                  <TextField
                    label={t(i18nKey.email_address)}
                    value={userReducer?.email || ''}
                    disabled
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box className={classes.fieldContainer}>
                  <TextFormField
                    name={'firstName'}
                    label={t(i18nKey.first_name)}
                    placeholder='Bach'
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box className={classes.fieldContainer}>
                  <TextFormField
                    name='lastName'
                    label={t(i18nKey.last_name)}
                    placeholder='Bui'
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box className={classes.fieldContainer}>
                  <DateFormField
                    label={t(i18nKey.date_of_birth)}
                    name={'dateOfBirth'}
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

export default ProfileForm;
