import gql from 'graphql-tag'
import { auth, stub } from '@aunited/common/src/constants/security'
import * as actions from '../constants'
import { login } from '../../login/actions'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const register = () => async (dispatch, getState, client) => {
  const { email, password } = getState().auth.registration

  try {
    const {data} = await client.mutate({
        mutation: gql`
          mutation Register($input: RegisterUserInput!) {
            register(input: $input) {
              errors {
                email
                password
              }
            }
          }
        `,
        variables: {
            input: {
                email,
                password,
            },
        },
    })

    if (data.register.errors) {
        dispatch({
            type: actions.setErrors,
            errors: data.register.errors,
        })
    } else {
        dispatch(login({ afterReg: true }))
    }

  } catch (e) {
    dispatch({
      type: actions.setErrors,
      errors: {
        registration: true,
      }
    })
  }
}

export const clear = () => ({
  type: actions.clear,
})
