import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import ControlledAccordions from './accordion'
import CustomTable from './table'

const useStyles = makeStyles((theme) => ({
}))

const ContentCard = (props: any) => {

  const classes = useStyles()

  return (
    <ControlledAccordions>
      <CustomTable />
    </ControlledAccordions>
  )
}

export default connect()(ContentCard)