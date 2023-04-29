import { FiveChecks } from "./FiveChecks"
import styled from 'styled-components'
import { Text } from "./Text"
import { SectionRowHeader } from "./Headers"
import { Counter } from "./Counter"
import { TenChecks } from "./TenChecks"
import { Table } from "./Table"
import { NChecks } from "./NChecks"
import { VariableList } from "./VariableList"
import { DoubleTen } from "./DoubleTen"

const SkillWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const SubSection = ({name, children}) => (<>
    <SectionRowHeader>{name}</SectionRowHeader>
    <SkillWrapper>
        {children}
    </SkillWrapper>
</>)

const getSkillInputComponent = ({type, table}) => {
    switch(type) {
        case 'addableList':
            return (<VariableList/>)
        case 'table':
            return (<Table data={table}/>)
        case 'five':
            return (<FiveChecks />)
        case 'ten':
            return (<TenChecks />)
        case 'doubleTen':
            return (<DoubleTen />)
        case 'text':
            return (<Text/>)
        case 'number':
            return (<Counter />)
        case 'wheel':
            return (<NChecks length={20} />)
    }
}

export const Skill = ({name, nameStyle, type, table}) => {
    console.log(name,nameStyle)
    const SkillInputComponent = getSkillInputComponent({type, table})
    if(nameStyle === 'header'){
        return (<SubSection name={name}>
            {SkillInputComponent}
        </SubSection>)
    }
    
    return (<SkillWrapper>
        {name}
        {SkillInputComponent}
    </SkillWrapper>)
}