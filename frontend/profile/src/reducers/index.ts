import { createReducer } from '@utils/reducer'
import * as actions from '../constants'

interface Errors {
  firstName?: string
  lastName?: string
}

interface State {
  firstName?: string
  lastName?: string
  isEditing: boolean
  errors: Errors
}

const initialState: State = {
  firstName: '',
  lastName: '',
  isEditing: false,
  errors: {},
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({
    ...state,
    [field]: value,
    errors: {
      ...state.errors,
      [field]: '',
    },
  }),
  [actions.update]: (state, { user }) => ({
    ...state,
    me: user
  }),
  [actions.clear]: () => initialState
})
