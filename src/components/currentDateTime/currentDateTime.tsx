import { Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Props } from './props';
import useStyles from './styles';

const CurrentDateTime = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [dateTime, setDateTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    let timer = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <Typography variant='body1'>{dateTime}</Typography>;
};

export default CurrentDateTime;
