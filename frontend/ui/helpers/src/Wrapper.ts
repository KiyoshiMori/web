import { ReactNode } from 'react'
import styled from '@emotion/styled'
import { ifProp } from 'styled-tools'

export interface WrapperUiProps {
  disabled?: boolean
}

export interface WrapperProps extends WrapperUiProps {
  children?: ReactNode
  onClick?: () => void
}

const Wrapper = styled('div')<WrapperUiProps>(
  ({ theme }) => ({
    cursor: 'pointer'
  }),
  ifProp('disabled', () => ({
    cursor: 'default'
  }))
)

export default Wrapper
