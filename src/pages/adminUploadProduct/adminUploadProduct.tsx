import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Grid,
} from '@material-ui/core';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FormCard from 'src/components/formCard';
import Button from 'src/components/button';
import LayoutAdmin from 'src/components/layoutAdmin';
import useCategoryList from 'src/hooks/useCategoryList';
import useCountryList from 'src/hooks/useCountryList';
import useUploadProduct from 'src/hooks/useUploadProduct';
import { toast } from 'src/utils/toast';
import { Props } from './props';
import useStyles from './styles';

const AdminUploadProduct = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { data: categoryList } = useCategoryList();
  const [selectedCategory, setSelectedCategory] = useState();
  const { data: countryList, getData: getCountryList } = useCountryList();
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const { uploadProduct } = useUploadProduct();

  const handleChangeCategory = async (event: any) => {
    setSelectedCategory(event.target.value);
    console.log(event.target.value);
    await getCountryList(event.target.value);
  };

  const handleChangeCountry = (event: any) => {
    setSelectedCountry(event.target.value);
  };

  const onPickFile = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const onSubmit = async () => {
    if (!selectedFile) {
      toast.warn('Chọn file');
    } else if (!selectedCountry) {
      toast.warn('Chọn loại sản phẩm');
    } else {
      await uploadProduct(selectedFile, selectedCountry!);
    }
  };

  return (
    <LayoutAdmin main>
      <FormCard>
        <Grid xs={12} container>
          <Grid md={1} />
          <Grid
            xs={12}
            md={4}
            item
            container
            direction='column'
            alignItems='flex-start'
            justify='center'>
            <Typography>Danh mục</Typography>
          </Grid>
          <Grid
            xs={12}
            md={6}
            item
            container
            direction='column'
            alignItems='flex-start'
            justify='center'>
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
          <Grid md={1} />
        </Grid>
        <Box my={4} />

        <Grid xs={12} container>
          <Grid md={1} />
          <Grid
            xs={12}
            md={4}
            item
            container
            direction='column'
            alignItems='flex-start'
            justify='center'>
            <Typography>Loại sản phẩm</Typography>
          </Grid>
          <Grid
            xs={12}
            md={6}
            item
            container
            direction='column'
            alignItems='flex-start'
            justify='center'>
            <FormControl className={classes.formControl}>
              <InputLabel id='demo-simple-select-label'>
                Product Type
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                disabled={countryList.length === 0}
                id='demo-simple-select'
                value={selectedCountry}
                onChange={handleChangeCountry}>
                {countryList.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    {item.countryName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid md={1} />
        </Grid>

        <Box my={4} />
        <Grid xs={12} container>
          <Grid md={1} />
          <Grid
            xs={12}
            md={4}
            item
            container
            direction='column'
            alignItems='flex-start'
            justify='center'>
            <Typography>Chọn file</Typography>
          </Grid>
          <Grid
            xs={12}
            md={6}
            item
            container
            direction='column'
            alignItems='flex-start'
            justify='center'>
            <input
              type='file'
              accept='.txt'
              name='file'
              onChange={onPickFile}
            />
          </Grid>
          <Grid md={1} />
        </Grid>

        <Box my={4} textAlign='center'>
          <Button
            onClick={onSubmit}
            variant='contained'
            color='primary'
            className={classes.button}>
            OK
          </Button>
        </Box>
      </FormCard>
    </LayoutAdmin>
  );
};

export default AdminUploadProduct;
