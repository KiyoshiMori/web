import { createReducer } from '@utils/reducer'
import * as actions from '../constants/list'

export interface RowType {
  id: number
  email: string
  profile: {
    firstName: string
    lastName: string
  }
}

export type SortTypes = 'name' | 'email' | 'registrated' | 'lastLogin' | null

interface IList {
  rows: RowType[]
  count: number
  sortBy: [SortTypes, 'ASC' | 'DESC']
}

const initialState: IList = {
  rows: [],
  count: 0,
  sortBy: [null, 'DESC']
}

const flipSortDir = dir => dir === 'ASC' ? 'DESC' : 'ASC'

export default createReducer(initialState, {
  [actions.load]: (state, { list }: { list: IList }) => ({ ...state, ...list }),
  [actions.sort]: (state, { newSortBy }: { sortBy: SortTypes, rows: RowType[] }) => ({
    ...state,
    sortBy: [newSortBy, newSortBy === state.sortBy[0] ? flipSortDir(state.sortBy[1]) : 'DESC']
  }),
  [actions.clear]: () => initialState,
})
