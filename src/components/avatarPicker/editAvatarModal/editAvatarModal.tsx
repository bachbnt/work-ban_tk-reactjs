import { forwardRef, useState } from 'react';
import { Dialog } from '@material-ui/core';
import Avatar from 'react-avatar-edit';
import { useTranslation } from 'react-i18next';
import { startCase } from 'lodash';
import Button from 'src/components/button';
import { i18nKey } from 'src/locales/i18n';
import useStyles from './styles';
import { Props } from './props';

const EditAvatarModal = forwardRef((props: Props, ref: any) => {
  const classes = useStyles();
  const { open, onConfirm, onClose } = props;
  const { t } = useTranslation();

  const [imageBase64, setImageBase64] = useState('');

  const handleClose = () => {
    onClose();
  };

  const handleConfirm = () => {
    onConfirm(imageBase64);
    handleClose();
  };

  const handleEdit = (base64: string) => {
    setImageBase64(base64);
  };

  return (
    <Dialog
      className={classes.dialog}
      onClose={handleClose}
      open={open}
      disablePortal
      keepMounted>
      <Avatar
        width={350}
        height={250}
        imageWidth={350}
        imageHeight={250}
        onCrop={handleEdit}
        ref={ref}
      />

      <Button className={classes.button} type='submit' onClick={handleConfirm}>
        {startCase(t(i18nKey.save))}
      </Button>
    </Dialog>
  );
});

export default EditAvatarModal;
