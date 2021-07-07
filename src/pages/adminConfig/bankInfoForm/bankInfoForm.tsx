import { Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Button from 'src/components/button';
import TextFormField from 'src/components/formFields/textFormField';
import useYupResolver from 'src/hooks/useYupResolver';
import { Props } from './props';
import useStyles from './styles';
import { bankInfoFormSchema, BankInfoFormValue } from './validation';
import { FormProvider, useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { useEffect } from 'react';
import FormCard from 'src/components/formCard';
import useAdminBank from 'src/hooks/useAdminBank';
import useBankInfo from 'src/hooks/useBankInfo';

const BankInfoForm = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const resolver = useYupResolver(bankInfoFormSchema);
  const methods = useForm({ resolver });
  const { handleSubmit, reset } = methods;
  const { data: bankInfo } = useBankInfo();
  const { updateBank } = useAdminBank();

  useEffect(() => {
    const initialValue: BankInfoFormValue = {
      bankName: bankInfo?.bankName!,
      accountNumber: bankInfo?.accountNumber!,
      accountName: bankInfo?.accountName!,
    };
    reset(initialValue);
  }, [reset, bankInfo]);

  const onSubmit = useCallback(
    async (values: BankInfoFormValue) => {
      await updateBank(
        values.bankName,
        values.accountNumber,
        values.accountName
      );
    },
    [updateBank]
  );

  return (
    <FormCard>
      <Box>
        <FormProvider {...methods}>
          <TextFormField name='bankName' label='bankName' />
          <TextFormField name='accountNumber' label='accountNumber' />
          <TextFormField name='accountName' label='accountName' />
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
  );
};

export default BankInfoForm;
