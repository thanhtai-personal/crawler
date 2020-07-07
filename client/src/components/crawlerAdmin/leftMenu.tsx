import React from 'react'
import { connect } from 'react-redux'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import MenuItems from './menuItems'
import { Typography } from '@material-ui/core'
import { ListMenuEnum } from './enum'
import { updateContentKey } from 'root/actions/crawlerAdmin'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    backgroundColor: 'steelblue',
    ...theme.mixins.toolbar,
  },
  toolbarIconText: {
    color: 'yellow',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  }
}))

const LeftMenu = (props: any) => {

  const classes = useStyles()

  const { open, setOpen, text, contentKey,
    updateContentKey
  } = props

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Drawer
      variant='permanent'
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <Typography className={classes.toolbarIconText} variant={'h5'}>{text?.adminMenu || 'ADMIN MENU'}</Typography>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <MenuItems itemType={ListMenuEnum.first} updateContentKey={updateContentKey} contentKey={contentKey}/>
      <Divider />
      <MenuItems itemType={ListMenuEnum.secondary} updateContentKey={updateContentKey} contentKey={contentKey}/>
    </Drawer>
  )
}

const mapStateToProps = (rootState: any) => ({
  contentKey: rootState.crawlerAdmin?.contentKey
})

const mapProps = {
  updateContentKey
}

export default connect(mapStateToProps, mapProps)(LeftMenu)