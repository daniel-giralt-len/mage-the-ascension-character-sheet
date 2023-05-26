import styled from 'styled-components'
import { CheckProps } from './types'

export const Check = styled.div<CheckProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid black;
    ${({isSquare})=> isSquare ? '' : 'border-radius: 1em;'}}

    width: 1em;
    height: 1em;

    ${({isChecked})=> isChecked ? 'background: black;' : ''}}
    ${({readOnly})=> readOnly ? `:hover {
        background: blue;
    }`: ''}
`

export const UnCheck = styled(Check)`
    border: 0;
    ${({readOnly})=> readOnly ? `:hover {
        background: red;
    }`: ''}
`
