import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 600px) {
        flex-direction: column;
        row-gap: 5px;
    }
`

export const SaveInstructionsWrapper = styled.div`
    text-align: center;
`

export const LanguageWrapper = styled.div`
    display: flex;
    justify-content:center;
    row-gap: 5px;
    column-gap: 5px;
`