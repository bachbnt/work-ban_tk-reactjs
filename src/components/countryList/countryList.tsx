import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Hidden,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { Props } from './props';
import useStyles from './styles';
import useCategoryList from 'src/hooks/useCategoryList';
import Country from '../country/country';
import CountryMobile from '../countryMobile';
import useCountryList from 'src/hooks/useCountryList';
import { useState } from 'react';

const CountryList = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { data: countryList, getData: getCountryList } = useCountryList();
  const { data: categoryList } = useCategoryList();
  const [selectedCategory, setSelectedCategory] = useState();

  const handleChangeCategory = async (event: any) => {
    setSelectedCategory(event.target.value);
    await getCountryList(event.target.value);
  };

  return (
    <>
      <Hidden xsDown>
        <Box mt={4} className={clsx(classes.historyContainer)}>
          <Typography className={classes.title} variant='h5'>
            Danh sách sản phẩm
          </Typography>
        </Box>
        <Grid container direction='row' alignItems='center'>
          <Typography>Chọn danh mục</Typography>
          <Box mx={2} />
          <FormControl className={classes.formControl}>
            <InputLabel id='demo-simple-select-label'>Category</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={selectedCategory}
              onChange={handleChangeCategory}>
              {categoryList.map((item) => (
                <MenuItem key={item._id} value={item._id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

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
          <Box flex={1} mx={1}>
            <Typography className={classes.title} variant='h5'>
              Đơn giá
            </Typography>
          </Box>
          <Box flex={1} mx={1}>
            <Typography className={classes.title} variant='h5'>
              Hiển thị
            </Typography>
          </Box>
          <Box flex={1} mx={1} />
        </Box>

        {countryList.map((item) => (
          <Country
            key={item._id}
            data={item}
            onUpdated={async () => {
              await getCountryList(selectedCategory);
            }}
            onDeleted={async () => {
              await getCountryList(selectedCategory);
            }}
          />
        ))}
      </Hidden>

      <Hidden smUp>
        <Box mt={4} mb={2} className={clsx(classes.historyContainer)}>
          <Typography className={classes.title} variant='h5'>
            Danh sách sản phẩm
          </Typography>
        </Box>
        <Grid container direction='row' alignItems='center'>
          <Typography>Chọn danh mục</Typography>
          <Box mx={2} />
          <FormControl className={classes.formControl}>
            <InputLabel id='demo-simple-select-label'>Category</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={selectedCategory}
              onChange={handleChangeCategory}>
              {categoryList.map((item) => (
                <MenuItem key={item._id} value={item._id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {countryList.map((item) => (
          <CountryMobile
            key={item._id}
            data={item}
            onUpdated={async () => {
              await getCountryList(selectedCategory);
            }}
            onDeleted={async () => {
              await getCountryList(selectedCategory);
            }}
          />
        ))}
      </Hidden>
    </>
  );
};

export default CountryList;
