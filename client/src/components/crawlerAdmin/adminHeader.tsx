import React, { useContext } from 'react'
import { connect } from 'react-redux'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar, Grid,
  Toolbar, Typography,
  IconButton, Switch,
  ButtonGroup, Button
} from '@material-ui/core'
import CONSTANTS from 'root/constants/constants'
import { Menu as MenuIcon, CloudUpload as CloudUploadIcon } from '@material-ui/icons'
import { ThemeContext } from 'root/customMiddleware/multiThemeProvider'
import { ContentKeyEnum } from './enum'
import { crawlingAll } from 'root/actions/crawlerAdmin'

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
  },
  buttonGroup: {
  },
  buttonGroupTypo: {
    marginRight: theme.spacing(4)
  }
}))

const AdminTopBar = (props: any) => {

  const classes = useStyles()

  const { open, setOpen, text, contentKey, isCrawlingAll,
    crawlingAll
  } = props
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
        <Typography component='div' className={classes.buttonGroupTypo}>
          {contentKey === ContentKeyEnum.crawling && <ButtonGroup className={classes.buttonGroup} size='small' aria-label='small outlined button group'>
            <Button
              endIcon={<CloudUploadIcon />}
              onClick={(e: any) => { 
                e.stopPropagation()
                crawlingAll && typeof crawlingAll === 'function' && crawlingAll()
              }}
              disabled={isCrawlingAll}
            >
              {text?.crawlingAll || 'Crawling all'}
            </Button>
          </ButtonGroup>}
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

const mapStateToProps = (rootState: any) => ({
  contentKey: rootState.crawlerAdmin?.contentKey,
  isCrawlingAll: rootState.crawlerAdmin?.isCrawlingAll
})

const mapDispatch = {
  crawlingAll
}

export default connect(mapStateToProps, mapDispatch)(AdminTopBar)