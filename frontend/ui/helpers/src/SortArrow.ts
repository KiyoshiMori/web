import React, { createElement } from 'react'
import styled from '@emotion/styled'
import { ifProp } from 'styled-tools'

const Wrapper = styled('span')<{ flip?: boolean, show: boolean }>(
  {
    display: 'none',
  },
  ifProp('show', () => ({
    display: 'flex'
  })),
  ifProp('flip', () => ({
    transform: 'scale(1, -1)'
  })),
)

export default ({
  sortBy,
  sort
}) =>
  createElement(
    Wrapper,
    {
      flip: sortBy[1] === 'ASC',
      show: sortBy[0] === sort
    },
    '▼'
  )
