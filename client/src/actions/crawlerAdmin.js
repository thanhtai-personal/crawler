import actionType from 'root/actionTypes'

export const updateContentKey = (contentKey) => {
  return {
    type: actionType.UPDATE_CONTENT_KEY.SUCCESS,
    contentKey
  }
}

export const crawlingAll = (site) => {
  return {
    type: actionType.CRAWLING_ALL.PENDING,
    site
  }
}

export const crawlingSingle = (site, name) => {
  return {
    type: actionType.CRAWLING_SINGLE.PENDING,
    site,
    name
  }
}