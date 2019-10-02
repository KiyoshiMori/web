import { connect, getState } from 'react-redux'
import { lifecycle } from 'recompose'
import { load, sort } from '../../actions/list'
import { SortTypes } from '../../reducers/list'
import List from '../../components/desktop/List'

const enhance = lifecycle({
  componentDidMount() {
    this.props.onLoad()
  },
})

export default connect(
  state => ({
    rows: state.users.list.rows,
    sortBy: state.users.list.sortBy,
  }),
  (dispatch, ownProps) => ({
    onLoad: () => dispatch(load()),
    onSort: (sortBy: SortTypes) => () => dispatch(sort(sortBy))
  })
)(enhance(List))
