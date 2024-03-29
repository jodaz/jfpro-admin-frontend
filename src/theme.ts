import { createTheme, alpha } from '@mui/material/styles';
import { esES } from '@mui/x-date-pickers';

const palette = {
    primary: {
        main: '#161B24',
        contrastText: '#fff'
    },
    secondary: {
        main: '#fff',
        contrastText: '#161B24'
    },
    error: {
        main: '#C24141',
        contrastText: '#161B24'
    },
    warning: {
        main: '#E7C95E',
        contrastText: '#161B24'
    },
    success: {
        main: '#66996E',
        contrastText: '#161B24'
    },
    text: {
        primary: '#161B24',
        secondary: '#757E8A'
    },
    divider: '#ccc',
    background: {
        light: '#DAE0E6',
        default: '#EDF0F'
    }
}

const theme = createTheme({
    typography: {
        fontFamily: 'Ubuntu, sans-serif'
    },
    palette: palette,
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: '1rem',
                    textTransform: 'unset',
                    fontSize: '1.05rem',
                    fontWeight: 500,
                    borderRadius: '73px',
                    gap: '8px',
                    lineHeight: '20px'
                }
            }
        },
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backdropFilter: "blur(4px)"
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: ({ theme }) => ({
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    padding: '0.5rem 1rem',
                    transition: theme.transitions.create([
                        'border-color',
                        'background-color',
                        'box-shadow',
                    ]),
                    '&.Mui-focused': {
                        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.1rem`,
                        borderColor: theme.palette.primary.main,
                    },
                    '&.Mui-error': {
                        border: `2px solid ${theme.palette.error.main}`
                    },
                })
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: ({ theme }) => ({
                    lineHeight: '22px',
                    fontWeight: 500,
                    fontSize: '20px',
                    marginLeft: '-1rem',
                    color: `${theme.palette.primary.main}`
                })
            }
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    width: '100%'
                }
            }
        },
        MuiAlert: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    fontWeight: 500,
                    // color: '#F24747'
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                root: ({ theme }) => ({
                    '& .MuiDialogContent-root': {
                        padding: theme.spacing(2),
                    },
                    '& .MuiDialog-paper': {
                        borderRadius: '16px',
                        maxWidth: 'fit-content'
                    },
                    '& .MuiDialogActions-root': {
                        padding: theme.spacing(1),
                    },
                })
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: ({ theme }) => ({
                    '& .MuiDivider-wrapper': {
                        color: theme.palette.divider
                    }
                })
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    fontWeight: 500
                }
            }
        }
    }
}, esES);

export default theme;
