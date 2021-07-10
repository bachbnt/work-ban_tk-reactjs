import { Box, Typography, Divider } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useDeleteCategory from 'src/hooks/useDeleteCategory';
import Button from '../button';
import { Props } from './props';
import useStyles from './styles';

const CategoryMobile = (props: Props) => {
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
      <Box display='flex' flexDirection='column' my={2}>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          my={1}>
          <Typography className={classes.leading}>ID</Typography>
          <Box width={120}>
            <Typography align='right'>{data._id}</Typography>
          </Box>
        </Box>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          my={1}>
          <Typography className={classes.leading}>Tên</Typography>
          <Typography>{data.name}</Typography>
        </Box>
        <Box textAlign='right'>
          <Button classes={{ root: classes.button }} onClick={handleDelete}>
            Xoá
          </Button>
        </Box>
      </Box>
      <Divider classes={{ root: classes.divider }} />
    </Box>
  );
};

export default CategoryMobile;
