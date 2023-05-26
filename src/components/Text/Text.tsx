import styled from 'styled-components'
import { useFormContext } from 'react-hook-form'
import { TextProps } from './types'

const TextInput = styled.input `
    height: 1em;
    border: 0;
    border-bottom: 1px solid black;
    max-width: 120px;
`
export const Text: React.FC<TextProps> = ({name}) => {
    const { watch } = useFormContext()
    const readOnly = watch('readOnly')

    return (
    <TextInput disabled={readOnly} type='text' {...useFormContext().register(name)} />
)
}