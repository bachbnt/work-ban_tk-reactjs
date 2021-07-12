import { Box, Typography, Divider } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useDeleteCategory from 'src/hooks/useDeleteCategory';
import Button from '../button';
import { Props } from './props';
import useStyles from './styles';

const Category = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { data, onDeleted } = props;
  const { deleteCategory } = useDeleteCategory();

  const handleDelete = async () => {
    await deleteCategory(data._id);
    onDeleted();
  };

  return (
    <Box display='flex' flexDirection='column' my={1}>
      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'>
        <Box flex={1} mx={1}>
          <Typography>{data._id}</Typography>
        </Box>
        <Box flex={1} mx={1}>
          <Typography>{data.name}</Typography>
        </Box>
        <Box flex={1} mx={1} textAlign='right'>
          <Button classes={{ root: classes.button }} onClick={handleDelete}>
            Xoá
          </Button>
        </Box>
      </Box>
      <Divider classes={{ root: classes.divider }} />
    </Box>
  );
};

export default Category;
