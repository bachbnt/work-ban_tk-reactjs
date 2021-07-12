import { useCallback, useEffect } from 'react';
import {
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { FormProvider, useForm } from 'react-hook-form';
import useAddCountry from 'src/hooks/useAddCountry';
import useYupResolver from 'src/hooks/useYupResolver';
import { Props } from './props';
import useStyles from './styles';
import {
  AdminAddProductFormValue,
  adminAddProductFormSchema,
} from './validation';
import LayoutAdmin from 'src/components/layoutAdmin';
import TextFormField from 'src/components/formFields/textFormField';
import FormCard from 'src/components/formCard';
import Button from 'src/components/button';
import useCategoryList from 'src/hooks/useCategoryList';
import { useState } from 'react';
import { toast } from 'src/utils/toast';

const AdminAddCountry = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { createCountry } = useAddCountry();
  const resolver = useYupResolver(adminAddProductFormSchema);
  const methods = useForm({ resolver });
  const { handleSubmit, reset } = methods;
  const { data: categoryList } = useCategoryList();
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedPublished, setPublished] = useState(true);

  useEffect(() => {
    const initialValue: AdminAddProductFormValue = {
      countryName: '',
      countryCode: '',
      unitPrice: 0,
      image: '',
      describe: '',
    };
    reset(initialValue);
  }, [reset]);

  const onSubmit = useCallback(
    async (values: AdminAddProductFormValue) => {
      if (!selectedCategory) {
        toast.warn('Chọn danh mục');
      } else if (!selectedPublished) {
        toast.warn('Chọn kiểu hiển thị');
      } else {
        await createCountry(
          values.countryName,
          values.countryCode,
          selectedCategory!,
          values.unitPrice,
          values.image,
          values.describe,
          selectedPublished!
        );
      }
    },
    [createCountry, selectedCategory, selectedPublished]
  );

  const handleChangeCategory = async (event: any) => {
    setSelectedCategory(event.target.value);
  };

  const handleChangePublished = async (event: any) => {
    if (event.target.value === 1) {
      setPublished(true);
    } else if (event.target.value === 0) {
      setPublished(false);
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

        <FormProvider {...methods}>
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
              <Typography>Tên</Typography>
            </Grid>
            <Grid
              xs={12}
              md={6}
              item
              container
              direction='column'
              alignItems='flex-start'
              justify='center'>
              <TextFormField name='countryName' label='name' />
            </Grid>
            <Grid md={1} />
          </Grid>
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
              <Typography>Mã</Typography>
            </Grid>
            <Grid
              xs={12}
              md={6}
              item
              container
              direction='column'
              alignItems='flex-start'
              justify='center'>
              <TextFormField name='countryCode' label='code' />
            </Grid>
            <Grid md={1} />
          </Grid>
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
              <Typography>Đơn giá</Typography>
            </Grid>
            <Grid
              xs={12}
              md={6}
              item
              container
              direction='column'
              alignItems='flex-start'
              justify='center'>
              <TextFormField name='unitPrice' label='price' />
            </Grid>
            <Grid md={1} />
          </Grid>
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
              <Typography>Url ảnh</Typography>
            </Grid>
            <Grid
              xs={12}
              md={6}
              item
              container
              direction='column'
              alignItems='flex-start'
              justify='center'>
              <TextFormField name='image' label='image' />
            </Grid>
            <Grid md={1} />
          </Grid>
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
              <Typography>Mô tả</Typography>
            </Grid>
            <Grid
              xs={12}
              md={6}
              item
              container
              direction='column'
              alignItems='flex-start'
              justify='center'>
              <TextFormField name='describe' label='describe' />
            </Grid>
            <Grid md={1} />
          </Grid>
        </FormProvider>

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
            <Typography>Hiển thị</Typography>
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
              <InputLabel id='demo-simple-select-label'>Publish</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={selectedPublished ? 1 : 0}
                onChange={handleChangePublished}>
                <MenuItem key={'yes'} value={1}>
                  Có
                </MenuItem>
                <MenuItem key={'no'} value={0}>
                  Không
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid md={1} />
        </Grid>
        <Box my={4} textAlign='center'>
          <Button
            onClick={handleSubmit(onSubmit)}
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

export default AdminAddCountry;
