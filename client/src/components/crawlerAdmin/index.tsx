import React from 'react'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'
import {
  CustomBodyFrame, CustomLeftPanelMinFrame,
  CustomMiddlePanelMaxFrame
} from 'root/constants/commonStyled'

interface CrawlerAdminProps {
  text: any
}

interface CrawlerAdminState { }

const CrawlerAdminComponent = (props: CrawlerAdminProps, state: CrawlerAdminState) => {
  return (
    <CustomBodyFrame style={{
      backgroundColor: 'green',
    }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <CustomLeftPanelMinFrame style={{
            backgroundColor: 'yellow',
          }}>
            left panel
          </CustomLeftPanelMinFrame>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomMiddlePanelMaxFrame style={{
            backgroundColor: 'gray',
          }}>
            content panel
          </CustomMiddlePanelMaxFrame>
        </Grid>
      </Grid>


    </CustomBodyFrame>
  )
}

interface RootState {
  login: any,
}

const mapState = (state: RootState) => ({})

const mapDispatch = {
}

export default connect(mapState, mapDispatch)(CrawlerAdminComponent)