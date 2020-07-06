import React from 'react'
import { Container } from '@material-ui/core'
import CrawlerAdminComponent from 'root/components/crawlerAdmin'

interface CrawlerAdminProps {
  lang: any
}
interface CrawlerAdminState { }

class CrawlerAdminContainer extends React.PureComponent<CrawlerAdminProps, CrawlerAdminState> {
  render() {
    return (<CrawlerAdminComponent text={this.props.lang?.crawlerAdmin} />)
  }
}

export default CrawlerAdminContainer