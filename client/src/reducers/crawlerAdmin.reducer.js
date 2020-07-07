import actionType from 'root/actionTypes'
import { ContentKeyEnum } from 'root/components/crawlerAdmin/enum'

const initialState = {
  contentKey: ContentKeyEnum.noval
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.UPDATE_CONTENT_KEY.SUCCESS:
      return {
        ...state,
        contentKey: action.contentKey
      }
    default:
      return state
  }
}