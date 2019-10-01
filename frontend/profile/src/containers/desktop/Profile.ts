import { connect } from 'react-redux'
import { change, update, startEdit } from '../../actions'
import Profile from '../../components/desktop/Profile'

export default connect(
    state => ({
        firstName: state.profile.isEditing ? state.profile.firstName : state.me.profile.firstName,
        lastName: state.profile.isEditing ? state.profile.lastName : state.me.profile.lastName,
        isEditing: state.profile.isEditing
    }),
    dispatch => ({
        onChangeFirstName: value => dispatch(change('firstName', value)),
        onChangeLastName: value => dispatch(change('lastName', value)),
        onEditClick: () => dispatch(startEdit(true)),
        onCancelEditingClick: () => dispatch(startEdit(false)),
        onSaveClick: () => dispatch(update()),
    })
)(Profile)
