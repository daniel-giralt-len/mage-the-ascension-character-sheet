import { useFormContext } from "react-hook-form"
import styled from 'styled-components'
import { Check } from "../index"
import { NChecksProps } from "./types"

const NChecksWrapper = styled.div`
    display: flex;
    justify-content: center;
`


export const NChecks: React.FC<NChecksProps> = ({isSquare, length=5, name}) => {
    const { watch, setValue } = useFormContext()
    const value = watch(name)


    const handleValueChange = (v: number) => {
        setValue(name, v)
    }
    return (
        <NChecksWrapper>
        {Array(length).fill(0).map((_,i)=>{
            return (<Check
                key={i}
                isChecked={value >= i+1}
                onClick={() => handleValueChange(i+1)}
                isSquare={isSquare}
            />)
        })}
        </NChecksWrapper>
    )
}
