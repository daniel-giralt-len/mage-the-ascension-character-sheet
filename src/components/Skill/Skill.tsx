import { FiveChecks,Text,
    SectionRowHeader,
    Counter,
    TenChecks,
    Table,
    NChecks,
    VariableList,
    DoubleTen, } from "../index"
import styled from 'styled-components'
import { getSkillInputComponentType, SkillType } from "./types"
import { t } from "../../translations"


const SkillWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const getSkillInputComponent: getSkillInputComponentType = ({name, type, table}) => {
    switch(type) {
        case 'addableList':
            return (<VariableList name={name} />)
        case 'table':
            return (<Table data={table} name={name} />)
        case 'five':
            return (<FiveChecks name={name} />)
        case 'ten':
            return (<TenChecks name={name} />)
        case 'doubleTen':
            return (<DoubleTen name={name} />)
        case 'text':
            return (<Text name={name} />)
        case 'number':
            return (<Counter name={name} />)
        case 'wheel':
            return (<NChecks length={20} name={name} />)
        default:
            return (<div>FIELD NOT IMPLEMENTED {t(name)}, {type}</div>)
    }
}

export const Skill: React.FC<SkillType> = ({name, nameStyle, type, table}) => {
    const SkillInputComponent = getSkillInputComponent({name, type, table})
    if(nameStyle === 'header'){
        return (<>
            <SectionRowHeader>{t(name)}</SectionRowHeader>
            <SkillWrapper>
                {SkillInputComponent}
            </SkillWrapper>
        </>)
    }
    
    return (<SkillWrapper>
        {t(name)}
        {SkillInputComponent}
    </SkillWrapper>)
}