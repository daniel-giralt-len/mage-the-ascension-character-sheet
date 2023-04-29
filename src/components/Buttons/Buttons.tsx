import styled from 'styled-components'
import { ButtonProps } from './types'
export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid black;
    ${({isSquare})=> isSquare ? '' : 'border-radius: 1em;'}}

    width: 1em;
    height: 1em;

    :hover {
        background: blue;
    }
    :active {
        background: black;
    }
`

export const AddButton: React.FC<ButtonProps> = ({onClick}) => <Button onClick={onClick}>+</Button>
