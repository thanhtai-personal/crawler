import { combineReducers } from 'redux'
import loginReducer from './login.reducer'
import authReducer from './auth.reducer'
import registerReducer from './register.reducer'

const rootReducer = combineReducers({
  login: loginReducer,
  auth: authReducer,
  register: registerReducer,
})

export default rootReducer