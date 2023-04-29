import styled from 'styled-components'
import { useState } from "react"
import { Check } from "../index"
import { HighlightType, NChecksProps } from "./types"

const NChecksWrapper = styled.div`
    display: flex;
    justify-content: center;
`


export const NChecks: React.FC<NChecksProps> = ({isSquare, length=5}) => {
    const [highlit, setHighlit] = useState<HighlightType>({})
    const [value, setValue] = useState(0)

    const handleMouseOver = (i: number) => {
        setHighlit({[i]: true})
    }
    const handleMouseOut = (i: number) => {
        setHighlit({[i]: false})
    }
    return (
        <NChecksWrapper>
        {Array(length).fill(0).map((_,i)=>{
            return (<Check
                key={i}
                isHovered={highlit[i]}
                isChecked={value >= i+1}
                onMouseOver={() => handleMouseOver(i)}
                onMouseOut={() => handleMouseOut(i)}
                onClick={() => setValue(i+1)}
                isSquare={isSquare}
            />)
        })}
        </NChecksWrapper>
    )
}
