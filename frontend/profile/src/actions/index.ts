import gql from 'graphql-tag'
import * as actions from '../constants'
import { init as updateProfile } from '@frontend/dashboard/src/actions/init'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const startEdit = (bool?: boolean) => async (dispatch, getState) => {
    const firstName = getState().me.profile.firstName
    const lastName = getState().me.profile.lastName

    if (bool === true) {
      dispatch(change('firstName', firstName))
      dispatch(change('lastName', lastName))
      dispatch(change('isEditing', true))
    } else {
      dispatch(clear())
      dispatch(change('isEditing', false))
    }
}

export const update = () => async (dispatch, getState, client) => {
  const firstName = getState().profile.firstName
  const lastName = getState().profile.lastName

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
        dispatch(updateProfile())
        dispatch(startEdit(false))
    }
  } catch (e) {
    // mock:
    // const stub = {
    //   id: 1,
    //   email: 'crockford@lmao.com',
    //   profile: {
    //     firstName,
    //     lastName,
    //   },
    // }
    // dispatch({
    //     type: actions.update,
    //     user: stub,
    // })
    // dispatch({
    //     type: actions.clear,
    // })
  }
}

export const clear = () => ({
  type: actions.clear,
})
