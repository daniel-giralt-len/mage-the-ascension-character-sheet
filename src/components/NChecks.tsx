import { useState } from "react"
import { Check } from "./Check"
import styled from 'styled-components'

export const NChecks = ({isSquared, length=5}) => {
    const [highlit, setHighlit] = useState({})
    const [value, setValue] = useState(0)

    const handleMouseOver = i => {
        setHighlit({[i]: true})
    }
    const handleMouseOut = i => {
        setHighlit({[i]: false})
    }
    return (
        <div>
        {Array(length).fill().map((_,i)=>{
            const isHovered = highlit[i]
            return (<Check
                key={i}
                isHovered={isHovered}
                isChecked={value >= i+1}
                onMouseOver={() => handleMouseOver(i)}
                onMouseOut={() => handleMouseOut(i)}
                onClick={() => setValue(i+1)}
                isSquared={isSquared}
            />)
        })}
        </div>
    )
}
