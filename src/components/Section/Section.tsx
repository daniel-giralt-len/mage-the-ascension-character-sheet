import { SectionHeader, SkillRow } from "../index"
import styled from 'styled-components'
import { useState } from "react"
import { SectionProps } from "./types"
import { t } from "../../translations"

const SectionGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3,1fr);
    }
    column-gap: 50px;
`

export const Section: React.FC<SectionProps> = ({rows, title}) => {
    const [isClosed, setIsClosed] = useState(false)
    const toggleIsClosed = () => setIsClosed(!isClosed)

    return (<section>
        {title && <SectionHeader onClick={toggleIsClosed}>{t(title)} ({isClosed ? '+' : '-'})</SectionHeader>}
        {!isClosed && (<SectionGrid>
            {rows && rows.map((row,i)=>(<SkillRow rowI={i} key={i} {...row}/>))}
        </SectionGrid>)}
    </section>)
}