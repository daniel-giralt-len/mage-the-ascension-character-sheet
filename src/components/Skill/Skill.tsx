import { FiveChecks,Text,
    SectionRowHeader,
    Counter,
    TenChecks,
    Table,
    NChecks,
    VariableList,
    DoubleTen, } from "../index"
import styled from 'styled-components'

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