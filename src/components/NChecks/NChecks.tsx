import { useState } from "react"
import { Check } from "../index"
import styled from 'styled-components'

const NChecksWrapper = styled.div`
    display: flex;
    justify-content: center;
`


export const NChecks = ({isSquare, length=5}) => {
    const [highlit, setHighlit] = useState({})
    const [value, setValue] = useState(0)

    const handleMouseOver = i => {
        setHighlit({[i]: true})
    }
    const handleMouseOut = i => {
        setHighlit({[i]: false})
    }
    return (
        <NChecksWrapper>
        {Array(length).fill().map((_,i)=>{
            const isHovered = highlit[i]
            return (<Check
                key={i}
                isHovered={isHovered}
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
