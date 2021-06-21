import { Button as MaterialButton } from '@material-ui/core';
import { Props } from './props';
import useStyles from './styles';

const Button = (props: Props) => {
  const classes = useStyles();

  return (
    <MaterialButton
      classes={{
        root: classes.root,
        label: classes.label,
        contained: classes.contained,
        containedPrimary: classes.containedPrimary,
        containedSecondary: classes.containedSecondary,
        outlined: classes.outlined,
        outlinedPrimary: classes.outlinedPrimary,
        outlinedSecondary: classes.outlinedSecondary,
      }}
      {...props}
    />
  );
};

export default Button;
