import { connect } from 'react-redux'
import { change, update } from '../../actions'
import Profile from '../../components/desktop/Profile'

export default connect(
    state => ({
        firstName: state.profile.firstName || state.me.profile.firstName,
        lastName: state.profile.lastName || state.me.profile.lastName,
        isEditing: state.profile.isEditing
    }),
    dispatch => ({
        onChangeFirstName: value => dispatch(change('firstName', value)),
        onChangeLastName: value => dispatch(change('lastName', value)),
        onEditClick: () => dispatch(change('isEditing', true)),
        onSaveClick: () => {
          dispatch(change('isEditing', false))
          dispatch(update())
        },
    })
)(Profile)
