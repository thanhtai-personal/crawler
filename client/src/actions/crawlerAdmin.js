import actionType from 'root/actionTypes'

export const updateContentKey = (contentKey) => {
  return {
    type: actionType.UPDATE_CONTENT_KEY.SUCCESS,
    contentKey
  }
}