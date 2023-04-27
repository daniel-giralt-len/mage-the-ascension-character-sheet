import styled from 'styled-components'
const StyledCheck = styled.input`
    ${({isSquared}) => isSquared ? '' : ''}
`

export const Check = ({isSquared, disabled}) => {
    return (<StyledCheck
        disabled={disabled}
        isSquared={isSquared}
        type='checkbox'
    />)
}