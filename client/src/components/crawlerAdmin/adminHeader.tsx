import React, { useContext } from 'react'
import { connect } from 'react-redux'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar, Grid,
  Toolbar, Typography,
  IconButton, Switch
} from '@material-ui/core'
import CONSTANTS from 'root/constants/constants'
import MenuIcon from '@material-ui/icons/Menu'
import { ThemeContext } from 'root/customMiddleware/multiThemeProvider'

const { themeEnum } = CONSTANTS

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  }
}))

const AdminTopBar = (props: any) => {

  const classes = useStyles()

  const { open, setOpen, text } = props
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const setTheme = useContext(ThemeContext)
  const onChangeTheme = (e: any) => {
    const checked = e?.target?.checked
    if (checked) {
      setTheme(themeEnum.dark)
    } else {
      setTheme(themeEnum.light)
    }
  }

  return (
    <AppBar position='absolute' className={clsx(classes.appBar, open && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography component='h1' variant='h6' color='inherit' noWrap className={classes.title}>
          {text?.crawlerData || 'Crawler data'}
          </Typography>
        <Typography component='div'>
          <Grid component='label' container alignItems='center' spacing={1}>
            <Grid item>{text?.light || 'Light'}</Grid>
            <Grid item>
              <Switch defaultChecked={false} onChange={onChangeTheme} name='checkedC' />
            </Grid>
            <Grid item>{text?.dark || 'Dark'}</Grid>
          </Grid>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default connect()(AdminTopBar)