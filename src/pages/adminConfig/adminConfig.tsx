import { useTranslation } from 'react-i18next';
import LayoutAdmin from 'src/components/layoutAdmin';
import { Props } from './props';
import useStyles from './styles';
import HtmlForm from './htmlForm';
import BankInfoForm from './bankInfoForm';
import { Box } from '@material-ui/core';

const AdminConfig = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <LayoutAdmin main>
      <HtmlForm />
      <Box my={4} />
      <BankInfoForm />
    </LayoutAdmin>
  );
};

export default AdminConfig;
