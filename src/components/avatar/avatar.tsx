import { Avatar as MaterialAvatar } from '@material-ui/core';
import { Props } from './props';
import useStyles from './styles';

const Avatar = (props: Props) => {
  const classes = useStyles();

  return (
    <MaterialAvatar
      classes={{
        root: classes.root,
        colorDefault: classes.colorDefault,
        img: classes.img,
      }}
      alt='avatar'
      {...props}
    />
  );
};

export default Avatar;
