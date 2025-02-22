import { connect } from 'react-redux'
import { logout } from '@aunited/common/src/actions/security'
import Header from '../../components/desktop/Header'

export default connect(
  state => ({
    firstName: state.me.profile.firstName || 'Профиль',
    lastName: state.me.profile.lastName || '',
  }),
  dispatch => ({
    onLogout: () => dispatch(logout()),
  })
)(Header)
