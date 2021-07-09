import { useTranslation } from 'react-i18next';
import FormCard from 'src/components/formCard';
import LayoutAdmin from 'src/components/layoutAdmin';
import UserList from 'src/components/userList';
import { Props } from './props';
import useStyles from './styles';

const AdminUserManagement = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <LayoutAdmin main>
      <FormCard>
        <UserList />
      </FormCard>
    </LayoutAdmin>
  );
};

export default AdminUserManagement;
