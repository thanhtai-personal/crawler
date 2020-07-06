import { createMuiTheme } from '@material-ui/core';

export const darkTheme = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        backgroundColor: 'darkslateblue',
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
        backgroundColor: 'darkslateblue',
        flex: '1 0 auto',
        fontSize: '12px',
      }
    },
    MuiContainer: {
      root: {
        backgroundColor: '#493430',
      }
    },
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#493430'
        },
        h5: {
          fontcolor: 'white',
          color: 'white'
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
        backgroundColor: '#4B170B'
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: '#4B170B'
      }
    },
    MuiListItemText: {
      primary: {
        fontSize: '1em',
        color: 'white'
      },
      secondary: {
        fontSize: '1.2em',
        color: 'yellow'
      }
    },
    MuiListSubheader: {
      root: {
        color: 'yellow'
      }
    },
    MuiAppBar: {
      root: {
        backgroundColor: '#3f51b5'
      }
    },
    MuiTableCell: {
      head: {
        color: 'white'
      },
      body: {
        color: 'white'
      }
    },
    MuiAccordionSummary: {
      content: {
        color: 'white'
      }
    },
    MuiIconButton: {
      root: {
        color: 'white'
      }
    }
  }
});