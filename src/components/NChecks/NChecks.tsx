import { useFormContext } from "react-hook-form"
import styled from 'styled-components'
import { Check, UnCheck } from "../index"
import { NChecksProps } from "./types"

const NChecksWrapper = styled.div`
    display: flex;
    justify-content: center;
`


export const NChecks: React.FC<NChecksProps> = ({isSquare, length=5, name}) => {
    const { watch, setValue } = useFormContext()
    const value = watch(name)
    const readOnly = watch('readOnly')


    const handleValueChange = (v: number) => {
        setValue(name, v)
    }
    return (
        <NChecksWrapper>
            {!readOnly && (<UnCheck
                key={0}
                onClick={() => handleValueChange(0)}
                isSquare={isSquare}
            >x</UnCheck>)}
        {Array(length).fill(0).map((_,i)=>{
            return (<Check
                readOnly={readOnly}
                key={i+1}
                isChecked={value >= i+1}
                onClick={() => !readOnly && handleValueChange(i+1)}
                isSquare={isSquare}
            />)
        })}
        </NChecksWrapper>
    )
}
