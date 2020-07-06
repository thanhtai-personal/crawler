import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AdminTopBar from './adminHeader'
import LeftMenu from './leftMenu'
import MainContent from './content'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }
}))

const CrawlerAdminComponent = (props: any) => {

  const classes = useStyles()

  const [open, setOpen] = React.useState(true)

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AdminTopBar open={open} setOpen={setOpen} />
      <LeftMenu open={open} setOpen={setOpen} />
      <MainContent />
    </div>
  )
}

export default connect()(CrawlerAdminComponent)