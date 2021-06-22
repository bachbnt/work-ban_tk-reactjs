import { createMuiTheme } from '@material-ui/core/styles';
import colors from './colors';
import variables from './variables';

const theme = createMuiTheme({
  typography: {
    htmlFontSize: variables.fontSize,
    fontFamily: variables.fontFamily,
    fontSize: variables.fontSize,
    fontWeightLight: variables.fontWeightLight,
    fontWeightRegular: variables.fontWeightRegular,
    fontWeightMedium: variables.fontWeightMedium,
    fontWeightBold: variables.fontWeightBold,
    body1: {
      lineHeight: variables.lineHeight,
      fontSize: variables.fontSize,
      fontWeight: 'inherit',
    },
    h1: {
      fontSize: variables.fontSizeHeading1,
      fontWeight: variables.fontWeightBold,
    },
    h2: {
      fontSize: variables.fontSizeHeading2,
      fontWeight: variables.fontWeightBold,
    },
    h3: {
      fontSize: variables.fontSizeHeading3,
      fontWeight: variables.fontWeightBold,
    },
    h4: {
      fontSize: variables.fontSizeHeading3,
      fontWeight: variables.fontWeightBold,
    },
    h5: {
      fontSize: variables.fontSizeHeading5,
      fontWeight: variables.fontWeightBold,
    },
    h6: {
      fontSize: variables.fontSizeHeading6,
      fontWeight: variables.fontWeightBold,
    },
    button: {
      fontWeight: variables.fontWeightMedium,
    },
    caption: {
      fontWeight: variables.fontWeightMedium,
    },
    subtitle1: {
      fontWeight: variables.fontWeightBold,
      lineHeight: variables.lineHeight,
    },
  },
  palette: {
    common: {
      white: colors.white,
      black: colors.black,
    },
    primary: {
      main: colors.primary,
      light: colors.primaryLight,
      dark: colors.primaryDark,
    },
    secondary: {
      main: colors.secondary,
      light: colors.secondaryLight,
      dark: colors.secondaryDark,
    },
    error: {
      main: colors.error,
      light: colors.errorLight,
      dark: colors.errorDark,
    },
    info: {
      main: colors.info,
      light: colors.infoLight,
      dark: colors.infoDark,
    },
    grey: {
      300: colors.grey300,
      400: colors.grey400,
      500: colors.grey500,
      600: colors.grey600,
    },
    text: {
      disabled: colors.grey600,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 680,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  shape: {
    borderRadius: variables.borderRadius,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: variables.toolbarMinHeight,
    },
  },
});

const themes = {
  ...theme,
  overrides: {
    MuiAppBar: {
      root: {
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiCssBaseline: {
      '@global': {
        margin: 0,
        html: {
          WebkitFontSmoothing: 'auto',
        },
        body: {
          color: colors.blueGrey,
          backgroundColor: theme.palette.common.white,
          fontWeight: variables.fontWeightRegular,
        },
      },
    },
    MuiTypography: {
      colorTextSecondary: {
        color: colors.blueGrey,
      },
    },
    MuiPaper: {
      root: {
        color: colors.blueGrey,
      },
    },
    MuiButton: {
      root: {
        padding: '12px 24px',
        borderRadius: variables.borderRadius,
        lineHeight: 1.2,
        color: colors.primaryDark,
        textTransform: 'uppercase',
        minWidth: variables.buttonMinWidth,
        fontSize: 11,
      },
      text: {
        textTransform: 'uppercase',
      },
      label: {},
      outlined: {
        padding: '12px 24px',
      },
      contained: {
        color: colors.primaryDark,
        backgroundColor: colors.transparent,
        boxShadow:
          '0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2), 0 2px 4px 0 rgba(0,0,0,0.02)',
        '&$disabled': {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.grey[500],
        },
      },
      containedPrimary: {
        color: theme.palette.common.white,
        boxShadow: variables.boxShadowPrimary,
      },
      containedSecondary: {
        color: theme.palette.common.white,
      },
      containedSizeSmall: {
        padding: '7px 10px',
        fontSize: 11,
        minWidth: 70,
      },
      textSizeSmall: {
        padding: '7px 10px',
        fontSize: 11,
      },
    },
    MuiTabs: {
      indicator: {
        height: 3,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        color: colors.grey300,
        padding: theme.spacing(1),
        '& img': {
          width: 56,
          height: 56,
          [theme.breakpoints.down('md')]: {
            width: 40,
            height: 40,
          },
        },
      },
      edgeEnd: {
        marginRight: -5,
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        borderColor: colors.white,
        backgroundColor: colors.white,
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightLight,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
    MuiFormControl: {
      marginNormal: {
        marginTop: 22,
      },
    },
    PrivateNotchedOutline: {
      root: {
        paddingLeft: 25,
      },
      legendLabelled: {
        '& > span': {
          paddingLeft: 7,
          paddingRight: 7,
        },
      },
    },
    MuiFormLabel: {
      root: {
        fontSize: variables.fontSize,
        color: colors.grey300,
        '&$focused': {
          color: theme.palette.secondary.main,
        },
        '&$error': {
          color: theme.palette.error.dark,
        },
      },
    },
    MuiInputLabel: {
      root: {
        textTransform: 'none',
      },
      outlined: {
        transform: 'translate(30px, 18px) scale(1)',
        '&$shrink': {
          transform: 'translate(30px, -6px) scale(0.75)',
        },
      },
    },
    MuiInputBase: {
      root: {
        color: colors.subtitle,
        '&$focused svg': {
          color: theme.palette.secondary.main,
        },
      },
      input: {
        height: 26,
        '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active':
          {
            transitionDelay: '9999s',
          },
      },
    },
    MuiInput: {
      underline: {
        '&:before': {
          borderBottomColor: colors.grey300,
        },
        '&:hover:not(.Mui-disabled):before': {
          borderBottomColor: colors.grey300,
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: variables.borderRadius,

        '&:hover $notchedOutline': {
          borderColor: theme.palette.grey[300],
        },
        '&$focused $notchedOutline': {
          borderWidth: 1,
          borderColor: theme.palette.secondary.main,
        },
        '&$error $notchedOutline': {
          borderColor: theme.palette.error.light,
        },
        '& ~ .MuiFormHelperText-contained': {
          marginLeft: 30,
          marginRight: 30,
        },
      },
      input: {
        padding: '17px 20px 17px 30px',
        color: colors.primaryDark,
      },
      notchedOutline: {
        borderColor: theme.palette.grey[300],
      },
      multiline: {
        paddingLeft: 30,
        paddingRight: 20,
      },
    },
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: colors.transparent,
        },
      },
    },
    MuiMenuItem: {
      root: {
        color: theme.palette.grey[400],
        '&$selected, &$selected:hover': {
          color: colors.primaryDark,
        },
        '&$selected:before': {
          content: '" "',
          position: 'absolute',
          borderTop: `2px solid ${theme.palette.secondary.main}`,
          borderLeft: `2px solid ${theme.palette.secondary.main}`,
          right: 20,
          top: '50%',
          height: 10,
          width: 7,
          transform: 'rotate(-137deg)',
          marginTop: -7,
        },
      },
    },
    MuiListItem: {
      button: {
        paddingTop: 12,
        paddingBottom: 12,
        color: theme.palette.common.white,
        '&:hover': {
          color: theme.palette.common.white,
        },
        '&$selected, &$selected:hover': {
          backgroundColor: colors.itemBackground,
          color: theme.palette.common.white,
          boxShadow: variables.boxShadowPrimary,
        },
      },
    },
    MuiDialogTitle: {
      root: {
        color: colors.black,
        '& > h2': {
          textAlign: 'center',
        },
      },
    },
    MuiDialogActions: {
      root: {
        justifyContent: 'center',
      },
    },
    MuiDrawer: {
      paper: {
        backgroundColor: colors.drawerBackground,
      },
    },
  },
};

export default themes;
