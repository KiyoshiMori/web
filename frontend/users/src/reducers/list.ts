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

export type SortTypes = 'name' | null

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

export default createReducer(initialState, {
  [actions.load]: (state, { list }: { list: IList }) => ({ ...state, ...list }),
  [actions.sort]: (state, { sortBy, rows }: { sortBy: SortTypes, rows: RowType[] }) => ({ ...state, rows, sortBy }),
  [actions.clear]: () => initialState,
})
