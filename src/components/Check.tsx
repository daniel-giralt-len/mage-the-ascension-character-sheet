import styled from 'styled-components'
const StyledCheck = styled.input`
    ${({isSquared}) => isSquared ? '' : ''}
`

//${({aaa})=> aaa ? '' : ''}}
export const Check = styled.div`
    display: inline-block;

    border: 1px solid black;
    ${({isSquared})=> isSquared ? '' : 'border-radius: 1em;'}}

    width: 1em;
    height: 1em;

    ${({isChecked})=> isChecked ? 'background: black;' : ''}}
    ${({isHovered})=> isHovered ? 'background: blue;' : ''}}
`

export const Chheck = ({
    isSquared,
    disabled,
    isHovered,
    isChecked,
    onMouseOver,
    onMouseOut,
    onClick,
}) => {
    return (<StyledCheck
        disabled={disabled}
        isSquared={isSquared}
        isHovered={isHovered}
        isChecked={isChecked}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onClick={onClick}
        type='checkbox'
    />)
}