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

const Country = (props: Props) => {
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
      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'>
        <Box flex={1} mx={1} textAlign='left'>
          <Typography>{data._id}</Typography>
        </Box>
        <Box flex={1} mx={1} textAlign='left'>
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
        <Box flex={1} mx={1} textAlign='left'>
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
        <Box flex={1} mx={1} textAlign='right'>
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
        <Box flex={1} mx={1} textAlign='right'>
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

export default Country;
