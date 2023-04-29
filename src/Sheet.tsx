import { Section } from "./components"
import styled from 'styled-components'

const SheetCenterer = styled.div`
    display:flex;
    justify-content: center;
`

const SheetWrapper = styled.div`
    max-width: 800px;
`

export const Sheet = ({sections}) => {
    return (<SheetCenterer>
        <SheetWrapper>
            {sections.map((section,i)=><Section key={i} {...section}/>)}
        </SheetWrapper>
    </SheetCenterer>)
}