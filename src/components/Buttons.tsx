import styled from 'styled-components'
//${({aaa})=> aaa ? '' : ''}}
export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid black;
    ${({isSquare})=> isSquare ? '' : 'border-radius: 1em;'}}

    width: 1em;
    height: 1em;

    ${({isChecked})=> isChecked ? 'background: black;' : ''}}
    ${({isHovered})=> isHovered ? 'background: blue;' : ''}}
`

export const AddButton = ({onClick}) => <Button onClick={onClick}>+</Button>
