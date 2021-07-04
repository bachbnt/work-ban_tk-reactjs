import { Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Button from 'src/components/button';
import TextFormField from 'src/components/formFields/textFormField';
import useYupResolver from 'src/hooks/useYupResolver';
import { Props } from './props';
import useStyles from './styles';
import { htmlFormSchema, HtmlFormValue } from './validation';
import { FormProvider, useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { useEffect } from 'react';
import FormCard from 'src/components/formCard';
import useAdminHtml from 'src/hooks/useAdminHtml';
import useHtmlNotification from 'src/hooks/useHtmlNotification';

const HtmlForm = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const resolver = useYupResolver(htmlFormSchema);
  const methods = useForm({ resolver });
  const { handleSubmit, reset } = methods;
  const { data: html } = useHtmlNotification();
  const { updateHtml } = useAdminHtml();

  useEffect(() => {
    const initialValue: HtmlFormValue = {
      html: `${html}`,
    };
    reset(initialValue);
  }, [reset, html]);

  const onSubmit = useCallback(
    async (values: HtmlFormValue) => {
      await updateHtml(values.html);
    },
    [updateHtml]
  );

  return (
    <FormCard>
      <Box>
        <FormProvider {...methods}>
          <TextFormField name='html' label='html' multiline rowsMax={10} />
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

export default HtmlForm;
