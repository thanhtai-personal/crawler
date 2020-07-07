import { createMuiTheme } from '@material-ui/core';

export const lightTheme = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        backgroundColor: 'bisque',
        display: 'flex',
        float: 'left',
      }
    },
    MuiCardMedia: {
      root: {
        display: 'flex',
        float: 'right',
      }
    },
    MuiCardContent: {
      root: {
        backgroundColor: 'bisque',
        flex: '1 0 auto',
        fontSize: '12px',
      }
    },
    MuiContainer: {
      root: {
        backgroundColor: 'bisque',
      }
    },
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: 'bisque'
        },
        h5: {
          fontcolor: 'white',
          color: 'black'
        }
      }
    },
    MuiButton: {
      root: {
        color: 'white'
      }
    },
    MuiLink: {
      root: {
        color: 'white'
      }
    },
    MuiExpansionPanel: {
      root: { 
        backgroundColor: 'steelblue',
        fontSize: '12px',
        color: 'black',
        border: 'solid 1px yellow'
      }
    },
    MuiDrawer: {
      root: {
        backgroundColor: 'white'
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: 'white'
      }
    },
    MuiListItemText: {
      primary: {
        fontSize: '1em',
        color: 'black'
      },
      secondary: {
        fontSize: '1.2em',
        color: 'yellow'
      }
    },
    MuiListSubheader: {
      root: {
        color: 'gray'
      }
    },
    MuiAppBar: {
      root: {
        backgroundColor: '#3f51b5'
      }
    },
    MuiTableCell: {
      head: {
        color: 'black'
      },
      body: {
        color: 'black'
      }
    },
    MuiAccordionSummary: {
      content: {
        color: 'black',
        margin: 'auto'
      }
    },
    MuiIconButton: {
      root: {
        color: 'black'
      }
    }
  }
});