import { createReducer } from '@utils/reducer'
import * as actions from '../constants/me'

const initialState = {
  id: '',
  email: '',
  profile: {
    firstName: '',
    lastName: '',
  },
}

export default createReducer(initialState, {
  [actions.load]: (state, { user }) => ({
    ...state,
    ...user,
    profile: {
      firstName: user.profile ? user.profile.firstName : '',
      lastName: user.profile ? user.profile.lastName : ''
    }
  }),
  [actions.clear]: () => initialState,
})
