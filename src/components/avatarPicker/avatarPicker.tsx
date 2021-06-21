import { useRef, useState } from 'react';
import { Box } from '@material-ui/core';
import { Cancel, PhotoCamera } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import Avatar from 'src/components/avatar';
import { i18nKey } from 'src/locales/i18n';
import { toast } from 'src/utils/toast';
import EditAvatarModal from './editAvatarModal';
import { Props } from './props';
import useStyles from './styles';

const AvatarPicker = (props: Props) => {
  const { image, replacement } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  const editAvatarRef = useRef<any>();
  const chooseFileRef = useRef<any>();

  const [currentImage, setCurrentImage] = useState(image);

  const [openAvatarEditor, setOpenAvatarEditor] = useState(false);

  const updateAvatar = async (base64String: string) => {};

  const handleSelectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files ? event.target?.files[0] : undefined;
    if (!file) {
      return;
    }

    if (!file.type.includes('image')) {
      toast.error(t(i18nKey.invalid_file_type));
      return;
    }

    setOpenAvatarEditor(true);
    editAvatarRef.current?.onFileLoad(event);
    event.target.value = '';
  };

  const handleClickPhoto = () => {
    chooseFileRef.current.click();
  };

  const handleClickRemove = async () => {};

  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.avatarContainer}>
          <Avatar src={currentImage} className={classes.avatar}>
            {replacement && replacement.charAt(0)}
          </Avatar>

          <Cancel className={classes.removeIcon} onClick={handleClickRemove} />

          <Box
            className={classes.cameraIconContainer}
            onClick={handleClickPhoto}>
            <PhotoCamera className={classes.cameraIcon} />
          </Box>
        </Box>

        <input
          type='file'
          accept='image/*'
          className={classes.fileInput}
          onChange={handleSelectImage}
          ref={chooseFileRef}
        />
      </Box>

      <EditAvatarModal
        open={openAvatarEditor}
        onClose={() => {
          setOpenAvatarEditor(false);
        }}
        onConfirm={updateAvatar}
        ref={editAvatarRef}
      />
    </>
  );
};
export default AvatarPicker;
