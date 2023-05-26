import styled from 'styled-components' 
import { formInteractionStyling } from '../styles'
import { AddButtonProps } from './types'

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid black;
    ${({isSquare})=> isSquare ? '' : 'border-radius: 1em;'}}

    width: 1em;
    height: 1em;

    ${formInteractionStyling({})}
`

export const AddButton: React.FC<AddButtonProps> = ({onClick}) => <Button onClick={onClick}>+</Button>
