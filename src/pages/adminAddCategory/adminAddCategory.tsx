import { useCallback, useEffect } from 'react';
import { Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { FormProvider, useForm } from 'react-hook-form';
import useAddCategory from 'src/hooks/useAddCategory';
import useYupResolver from 'src/hooks/useYupResolver';
import { Props } from './props';
import useStyles from './styles';
import {
  AdminAddCategoryFormValue,
  adminAddCategoryFormSchema,
} from './validation';
import LayoutAdmin from 'src/components/layoutAdmin';
import TextFormField from 'src/components/formFields/textFormField';
import FormCard from 'src/components/formCard';
import Button from 'src/components/button';

const AdminAddCategory = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { createCategory } = useAddCategory();
  const resolver = useYupResolver(adminAddCategoryFormSchema);
  const methods = useForm({ resolver });
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    const initialValue: AdminAddCategoryFormValue = {
      name: '',
    };
    reset(initialValue);
  }, [reset]);

  const onSubmit = useCallback(
    async (values: AdminAddCategoryFormValue) => {
      await createCategory(values.name);
    },
    [createCategory]
  );

  return (
    <LayoutAdmin main>
      <FormCard>
        <Box>
          <FormProvider {...methods}>
            <TextFormField name='name' label='category' />
            <Box my={2} />
            <Button
              onClick={handleSubmit(onSubmit)}
              variant='contained'
              color='primary'
              className={classes.button}>
              OK
            </Button>
          </FormProvider>
        </Box>
      </FormCard>
    </LayoutAdmin>
  );
};

export default AdminAddCategory;
