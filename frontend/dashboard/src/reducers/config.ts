import { createReducer } from '@utils/reducer'

console.log({ env: process.env })

const initialState = {
  apiUrl: process.env.API_URL || 'http://localhost:3000/graphql',
}

export default createReducer(initialState, {})
