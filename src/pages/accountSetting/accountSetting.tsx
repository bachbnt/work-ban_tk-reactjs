import { Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Layout from 'src/components/layout';
import { i18nKey } from 'src/locales/i18n';
import PasswordForm from './passwordForm';
import ProfileForm from './profileForm';
import { Props } from './props';
import useStyles from './styles';

const AccountSetting = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Layout main title={i18nKey.account_setting}>
      <Box my={2} className={classes.formWidth}>
        <ProfileForm />
      </Box>
      <Box my={2} className={classes.formWidth}>
        <PasswordForm />
      </Box>
    </Layout>
  );
};

export default AccountSetting;
