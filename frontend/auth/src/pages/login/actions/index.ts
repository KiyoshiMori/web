import gql from 'graphql-tag'
import { auth, stub } from '@aunited/common/src/constants/security'
import * as actions from '../constants'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const login = ({ afterReg }: { afterReg?: boolean } = {}) => async (dispatch, getState, client) => {
  const { email, password } = afterReg ? getState().auth.registration : getState().auth.login

  try {
    const { data } = await client.query({
      fetchPolicy: 'network-only',
      query: gql`
        query Login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            token {
              token
              expiresIn
            }
            errors {
              email
              password
            }
          }
        }
      `,
      variables: {
        email,
        password,
      },
    })

    if (data.login.errors) {
      dispatch({
        type: actions.setErrors,
        errors: data.login.errors,
      })
    } else {
      dispatch({
        type: actions.clear,
      })
    }

    const { token, expiresIn } = data.login.token

    dispatch({
      type: auth,
      token,
      expiresIn,
    })

  } catch (e) {
  }
}
