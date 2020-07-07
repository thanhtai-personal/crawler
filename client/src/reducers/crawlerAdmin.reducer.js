import actionType from 'root/actionTypes'
import { ContentKeyEnum } from 'root/components/crawlerAdmin/enum'

const initialState = {
  contentKey: ContentKeyEnum.crawling,
  isCrawlingAll: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.UPDATE_CONTENT_KEY.SUCCESS:
      return {
        ...state,
        contentKey: action.contentKey
      }
    case actionType.CRAWLING_ALL.PENDING:
      return {
        ...state,
        isCrawlingAll: true
      }
    case actionType.CRAWLING_ALL.FAILED:
    case actionType.CRAWLING_ALL.SUCCESS:
      return {
        ...state,
        isCrawlingAll: false
      }
    case actionType.CRAWLING_SINGLE.PENDING:
      return {
        ...state,
        [action.site]: {
          ...state[action.site],
          [action.name]: {
            isCrawlingSingle: true
          }
        }
      }
    case actionType.CRAWLING_SINGLE.FAILED:
    case actionType.CRAWLING_SINGLE.SUCCESS:
      return {
        ...state,
        [action.site]: {
          ...state[action.site],
          [action.name]: {
            isCrawlingSingle: false
          }
        }
      }
    default:
      return state
  }
}