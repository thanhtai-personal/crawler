import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import ContentCard from './contentCard'

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  }
}))

const MainContent = (props: any) => {

  const classes = useStyles()

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth='lg' className={classes.container}>
        <Grid container spacing={3}>
          <ContentCard />
        </Grid>
      </Container>
      <Container maxWidth='lg' className={classes.container}>
        <Grid container spacing={3}>
          <ContentCard />
        </Grid>
      </Container>
      <Container maxWidth='lg' className={classes.container}>
        <Grid container spacing={3}>
          <ContentCard />
        </Grid>
      </Container>
      <Container maxWidth='lg' className={classes.container}>
        <Grid container spacing={3}>
          <ContentCard />
        </Grid>
      </Container>
      <Container maxWidth='lg' className={classes.container}>
        <Grid container spacing={3}>
          <ContentCard />
        </Grid>
      </Container>
    </main>
  )
}

export default connect()(MainContent)