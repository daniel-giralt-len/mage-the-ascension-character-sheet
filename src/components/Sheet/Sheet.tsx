import { Section } from "../index"
import styled from 'styled-components'
import { useForm } from "react-hook-form"
import { SheetProps } from "./types"

const SheetCenterer = styled.div`
    display:flex;
    justify-content: center;
`

const SheetWrapper = styled.div`
    max-width: 800px;
`

export const Sheet: React.FC<SheetProps> = ({sections}) => {
    useForm()
    return (<SheetCenterer>
        <SheetWrapper>
            {sections.map((section,i)=><Section key={i} {...section}/>)}
        </SheetWrapper>
    </SheetCenterer>)
}