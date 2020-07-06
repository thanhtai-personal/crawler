import { createAsyncTypes } from 'root/constants/utilities'
import authenActionTypes from './auth'
import crawlerAdminTypes from './crawlerAdmin'
const actionType = {
  ...authenActionTypes,
  ...crawlerAdminTypes,
}

Object.keys(actionType).forEach((key) => {
  actionType[key] = createAsyncTypes(actionType[key])
})

export default actionType