import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import LayoutAdmin from 'src/components/layoutAdmin';
import { Props } from './props';
import useStyles from './styles';

const AdminProductManagement = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <LayoutAdmin main>
      <Typography>AdminProductManagement</Typography>
    </LayoutAdmin>
  );
};

export default AdminProductManagement;
