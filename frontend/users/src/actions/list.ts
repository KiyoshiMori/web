import gql from 'graphql-tag'
import * as actions from '../constants/list'
import { SortTypes, RowType } from '../../reducers/list'
import stub from './stub'

export const sort = (newSortBy: SortTypes) => async (dispatch, getState) => {
  const { sortBy, rows } = getState().users.list

  const sortedRows = [...rows]

  const toggleSortDir = () => {
    if (sortBy[0] === newSortBy) {
      sortedRows.reverse()
      return sortBy[1] === 'ASC' ? 'DESC' : 'ASC'
    } else {
      sortedRows.sort((a: RowType, b: RowType) => {
        if (newSortBy === 'name') {
          if (a.profile && b.profile) {
            const aConnectedName = a.profile.firstName + a.profile.lastName
            const bConnectedName = b.profile.firstName + b.profile.lastName
            return aConnectedName.localeCompare(bConnectedName)
          }
          return a.profile === null ? 1 : -1
        }

        if (newSortBy === 'email') {
          return a[newSortBy].localeCompare(b[newSortBy])
        }

        return 0
      })
      return 'DESC'
    }
  }

  const sortDir = toggleSortDir()

  dispatch({
    type: actions.sort,
    sortBy: [newSortBy, sortDir],
    rows: sortedRows
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
