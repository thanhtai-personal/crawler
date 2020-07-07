import React from 'react'
import { connect } from 'react-redux'
// import { makeStyles } from '@material-ui/core/styles'
import ControlledAccordions from './accordion'
import CustomTable from './table'
import { crawlingAll, crawlingSingle } from 'root/actions/crawlerAdmin'
// const useStyles = makeStyles((theme) => ({
// }))

const ContentCard = (props: any) => {
  const { data, text, isCrawlingAll,
    crawlingAll, crawlingSingleObj = {},
    crawlingSingle
  } = props
  // const classes = useStyles()
  const isCrawlingSingleObj = crawlingSingleObj[data.key]
  return (
    <ControlledAccordions siteKey={data?.key} label={text?.site || 'Site'} value={data?.name} url={data?.url}
      crawlingAll={crawlingAll} isCrawlingAll={isCrawlingAll}
    >
      <CustomTable crawlingSingle={crawlingSingle} siteKey={data?.key} isCrawlingAll={isCrawlingAll} isCrawlingSingleObj={isCrawlingSingleObj}/>
    </ControlledAccordions>
  )
}

const mapState = (rootState: any) => ({
  isCrawlingAll: rootState.crawlerAdmin?.isCrawlingAll,
  crawlingSingleObj: rootState.crawlerAdmin
})

const mapProps = {
  crawlingAll,
  crawlingSingle
}

export default connect(mapState, mapProps)(ContentCard)