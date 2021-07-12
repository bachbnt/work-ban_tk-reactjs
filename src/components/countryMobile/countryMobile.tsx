import {
  Box,
  FormControl,
  Divider,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@material-ui/core';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useDeleteCountry from 'src/hooks/useDeleteCountry';
import useUpdateCountry from 'src/hooks/useUpdateCountry';
import Button from '../button';
import { Props } from './props';
import useStyles from './styles';

const CountryMobile = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { data, onDeleted, onUpdated } = props;
  const { deleteCountry } = useDeleteCountry();
  const { updateCountry } = useUpdateCountry();
  const [currentName, setCurrentName] = useState(data.countryName);
  const [currentPrice, setCurrentPrice] = useState(data.unitPrice);
  const [currentPublished, setCurrentPublished] = useState(data.isPublished);

  const handleDelete = async () => {
    await deleteCountry(data._id);
    onDeleted();
  };

  const handleUpdate = async () => {
    await updateCountry(data._id, currentName, currentPrice, currentPublished);
    onUpdated();
  };

  const changeName = (event: any) => {
    setCurrentName(event.target.value);
  };

  const changePrice = (event: any) => {
    setCurrentPrice(parseInt(event.target.value));
  };

  const changePublished = (event: any) => {
    if (event.target.value === 1) {
      setCurrentPublished(true);
    } else if (event.target.value === 0) {
      setCurrentPublished(false);
    }
  };

  return (
    <Box display='flex' flexDirection='column' my={1}>
      <Box display='flex' flexDirection='column' my={2}>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          my={1}>
          <Typography className={classes.leading}>ID</Typography>
          <Box width={120}>
            <Typography align='right'>{data._id}</Typography>
          </Box>
        </Box>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          my={1}>
          <Typography className={classes.leading}>Tên</Typography>
          <Box width={120}>
            <TextField
              classes={{ root: classes.textField }}
              margin='none'
              inputMode='decimal'
              variant='outlined'
              defaultValue={currentName}
              onChange={(event) => {
                changeName(event);
              }}
            />
          </Box>
        </Box>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          my={1}>
          <Typography className={classes.leading}>Đơn giá</Typography>
          <Box width={120}>
            <TextField
              classes={{ root: classes.textField }}
              margin='none'
              inputMode='decimal'
              variant='outlined'
              type='number'
              defaultValue={currentPrice}
              InputProps={{ inputProps: { min: 0 } }}
              onChange={(event) => {
                changePrice(event);
              }}
            />
          </Box>
        </Box>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          my={1}>
          <Typography className={classes.leading}>Hiển thị</Typography>
          <Box width={120}>
            <FormControl className={classes.formControl}>
              <InputLabel id='demo-simple-select-label'>Publish</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={currentPublished ? 1 : 0}
                onChange={changePublished}>
                <MenuItem key={'yes'} value={1}>
                  Có
                </MenuItem>
                <MenuItem key={'no'} value={0}>
                  Không
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box textAlign='right'>
          <Button classes={{ root: classes.button }} onClick={handleUpdate}>
            Sửa
          </Button>
          <Box my={1} />
          <Button classes={{ root: classes.button }} onClick={handleDelete}>
            Xoá
          </Button>
        </Box>
      </Box>
      <Divider classes={{ root: classes.divider }} />
    </Box>
  );
};

export default CountryMobile;
