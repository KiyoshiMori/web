import gql from 'graphql-tag'
import * as actions from '../constants/me'

export const init = () => async (dispatch, getState, client) => {
  try {
    const { data } = await client.query({
      fetchPolicy: 'network-only',
      query: gql`
        query Me {
          me {
            id
            email
            profile {
              firstName
              lastName
            }
            registeredAt
            lastLogonAt
          }
        }
      `,
    })

    dispatch({
      type: actions.load,
      user: data.me
    })
  } catch (e) {
  }
}

export const clear = () => ({
  type: actions.clear,
})
