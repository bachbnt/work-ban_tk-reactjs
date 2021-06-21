import { render } from 'react-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import colors from './themes/colors';
import styles from './themes/styles';
import themes from './themes/themes';
import variables from './themes/variables';
import App from './app';

render(
  <ThemeProvider theme={{ ...themes, colors, variables, styles }}>
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);
