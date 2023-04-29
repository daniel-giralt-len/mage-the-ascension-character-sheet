import styled from 'styled-components'
import { CheckProps } from './types'

//${({aaa})=> aaa ? '' : ''}}
export const Check = styled.div<CheckProps>`
    display: inline-block;

    border: 1px solid black;
    ${({isSquare})=> isSquare ? '' : 'border-radius: 1em;'}}

    width: 1em;
    height: 1em;

    ${({isChecked})=> isChecked ? 'background: black;' : ''}}
    ${({isHovered})=> isHovered ? 'background: blue;' : ''}}
`
