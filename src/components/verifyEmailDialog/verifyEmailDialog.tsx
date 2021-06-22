import { useCallback, useEffect } from 'react';
import { Box, Dialog, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { FormProvider, useForm } from 'react-hook-form';
import useYupResolver from 'src/hooks/useYupResolver';
import { Props } from './props';
import useStyles from './styles';
import {
  VerifyEmailDialogFormValue,
  verifyEmailDialogFormSchema,
} from './validation';
import { DialogTitle } from '@material-ui/core';
import CodeFormField from '../formFields/codeFormField';
import Button from '../button';
import useVerifyEmail from 'src/hooks/useVerifyEmail';

const VerifyEmailDialog = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const resolver = useYupResolver(verifyEmailDialogFormSchema);
  const methods = useForm({ resolver });
  const { handleSubmit, reset } = methods;
  const { onClose, open } = props;
  const { verifyEmail } = useVerifyEmail();

  useEffect(() => {
    const initialValue: VerifyEmailDialogFormValue = {
      code: '',
    };
    reset(initialValue);
  }, [reset]);

  const onSubmit = useCallback(
    async (values: VerifyEmailDialogFormValue) => {
      await verifyEmail(values.code);
    },
    [verifyEmail]
  );

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Xác thực email</DialogTitle>
      <Box className={classes.container}>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CodeFormField />

            <Box mt={4} textAlign='center'>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                className={classes.button}>
                Xác nhận
              </Button>
            </Box>
          </form>
        </FormProvider>
      </Box>
    </Dialog>
  );
};

export default VerifyEmailDialog;
