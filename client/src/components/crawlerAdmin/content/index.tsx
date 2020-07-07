import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import ContentCard from './contentCard'
import { ContentKeyEnum } from './../enum'

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  '@global': {
    '*::-webkit-scrollbar-thumb': {
      background: 'steelblue',
      borderRadius: '10px'
    },
    '*::-webkit-scrollbar': {
      width: '10px'
    },
    '*::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 5px grey',
      borderRadius: '10px'
    },
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflowY: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  }
}))

const testNovals = [
  {
    key: 'truyencv',
    name: 'Truyện CV',
    url: 'https://truyencv.com/'
  }, {
    key: 'tangthuvien',
    name: 'Tàng thư viện',
    url: 'https://truyen.tangthuvien.vn/'
  }, {
    key: 'truyenyy',
    name: 'Truyện YY',
    url: 'https://truyenyy.com/'
  }, {
    key: 'truyencuatui',
    name: 'Truyện của tui',
    url: 'https://truyencuatui.net/'
  }
]

const MainContent = (props: any) => {
  const { contentKey } = props
  const classes = useStyles()
  let contentElement = <div></div>
  switch (contentKey) {
    case ContentKeyEnum.dashBoard:
      break
    case ContentKeyEnum.crawling:
      contentElement = (
        <Container maxWidth='lg' className={classes.container}>
          {testNovals.map((noval, index) => (
            <Grid container spacing={3} key={`${noval.key}-${index}`}>
              <ContentCard data={noval} />
            </Grid>
          ))}
        </Container>)
      break
    case ContentKeyEnum.user:
      break
    case ContentKeyEnum.noval:
    default:
      break
  }
  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      {contentElement}
    </main>
  )
}

const mapStateToProps = (rootState: any) => ({
  contentKey: rootState?.crawlerAdmin?.contentKey
})

const mapProps = {

}

export default connect(mapStateToProps, mapProps)(MainContent)