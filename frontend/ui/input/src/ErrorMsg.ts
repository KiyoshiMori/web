import styled from '@emotion/styled'
import { ifProp } from 'styled-tools'

const ErrorMsg = styled('span')<{ error }>(
    {
        display: 'none',
        margin: '5px 20px 0',
    }, ifProp('error', ({ theme }: any) => ({
        display: 'flex',
        color: theme.colors.red,
        fontWeight: 'bold',
    }))
)

export default ErrorMsg
