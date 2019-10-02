import gql from 'graphql-tag'
import * as actions from '../constants/list'
import { SortTypes, RowType } from '../../reducers/list'
import stub from './stub'

export const sort = (newSortBy: SortTypes) => async dispatch => {
  dispatch({
    type: actions.sort,
    newSortBy,
  })
}

export const load = () => async (dispatch, getState, client) => {
  try {
    const { data } = await client.query({
      fetchPolicy: 'network-only',
      query: gql`
        query Users {
          users {
            rows {
              id
              email
              profile {
                firstName
                lastName
              }
              registeredAt
              lastLogonAt
            }
            count
          }
        }
      `,
    })

    dispatch({
      type: actions.load,
      list: data.users,
    })
  } catch (e) {
    dispatch({
      type: actions.load,
      list: stub,
    })
  }
}

export const clear = () => ({
  type: actions.clear,
})
