import styled from 'styled-components'

const TextInput = styled.input `
    height: 1em;
    border: 0;
    border-bottom: 1px solid black;
    max-width: 120px;
`
export const Text = () => (
    <TextInput type='text'/>
)