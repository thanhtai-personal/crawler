import { createAsyncTypes } from 'root/constants/utilities'
import authenActionTypes from './auth'
const actionType = {
  ...authenActionTypes
}

Object.keys(actionType).forEach((key) => {
  actionType[key] = createAsyncTypes(actionType[key])
})

export default actionType