import { useTranslation } from 'react-i18next';
import CategoryList from 'src/components/categoryList';
import FormCard from 'src/components/formCard';
import LayoutAdmin from 'src/components/layoutAdmin';
import { Props } from './props';
import useStyles from './styles';

const AdminProductManagement = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <LayoutAdmin main>
      <FormCard>
        <CategoryList />
      </FormCard>
    </LayoutAdmin>
  );
};

export default AdminProductManagement;
