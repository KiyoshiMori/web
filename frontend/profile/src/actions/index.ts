import gql from 'graphql-tag'
import * as actions from '../constants'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const update = () => async (dispatch, getState, client) => {
  const firstName = getState().profile.firstName || getState().me.profile.firstName
  const lastName = getState().profile.lastName || getState().me.profile.lastName

  const stub = {
    id: 1,
    email: 'crockford@lmao.com',
    profile: {
      firstName,
      lastName,
    },
  }

  try {
    const {data} = await client.mutate({
        mutation: gql`
          mutation updateProfile($input: UpdateProfileInput!) {
            updateProfile(input: $input) {
              errors {
                firstName
                lastName
              }
            }
          }
        `,
        variables: {
            input: {
                firstName,
                lastName,
            },
        },
    })
    if (data.updateProfile.errors) {
        dispatch({
            type: actions.setErrors,
            errors: data.updateProfile.errors,
        })
    } else {
        dispatch({
            type: actions.clear,
        })
    }
  } catch (e) {
    dispatch({
        type: actions.update,
        user: stub,
    })

    dispatch({
        type: actions.clear,
    })
  }
}

export const clear = () => ({
  type: actions.clear,
})
