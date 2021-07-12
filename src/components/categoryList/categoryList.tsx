import { Hidden } from '@material-ui/core';
import { Box, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { Props } from './props';
import useStyles from './styles';
import useCategoryList from 'src/hooks/useCategoryList';
import CategoryMobile from '../categoryMobile';
import Category from '../category/category';

const CategoryList = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { data, getData } = useCategoryList();

  return (
    <>
      <Hidden xsDown>
        <Box mt={4} className={clsx(classes.historyContainer)}>
          <Typography className={classes.title} variant='h5'>
            Danh sách danh mục
          </Typography>
        </Box>
        <Box
          display='flex'
          flexDirection='row'
          alignItems='center'
          justifyContent='space-between'
          className={clsx(classes.historyContainer)}>
          <Box flex={1} mx={1}>
            <Typography className={classes.title} variant='h5'>
              ID
            </Typography>
          </Box>
          <Box flex={1} mx={1}>
            <Typography className={classes.title} variant='h5'>
              Tên
            </Typography>
          </Box>
          <Box flex={1} mx={1} />
        </Box>

        {data.map((item) => (
          <Category
            key={item._id}
            data={item}
            onDeleted={async () => {
              await getData();
            }}
          />
        ))}
      </Hidden>

      <Hidden smUp>
        <Box mt={4} mb={2} className={clsx(classes.historyContainer)}>
          <Typography className={classes.title} variant='h5'>
            Danh sách danh mục
          </Typography>
        </Box>
        {data.map((item) => (
          <CategoryMobile
            key={item._id}
            data={item}
            onDeleted={async () => {
              await getData();
            }}
          />
        ))}
      </Hidden>
    </>
  );
};

export default CategoryList;
