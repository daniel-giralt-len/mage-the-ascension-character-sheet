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

const getSkillInputComponent: getSkillInputComponentType = ({name, type, table, alwaysEditable}) => {
    switch(type) {
        case 'addableList':
            return (<VariableList alwaysEditable={alwaysEditable} name={name} />)
        case 'table':
            return (<Table alwaysEditable={alwaysEditable} data={table} name={name} />)
        case 'five':
            return (<FiveChecks alwaysEditable={alwaysEditable} name={name} />)
        case 'ten':
            return (<TenChecks alwaysEditable={alwaysEditable} name={name} />)
        case 'doubleTen':
            return (<DoubleTen alwaysEditable={alwaysEditable} name={name} />)
        case 'text':
            return (<Text alwaysEditable={alwaysEditable} name={name} />)
        case 'number':
            return (<Counter alwaysEditable={alwaysEditable} name={name} />)
        case 'wheel':
            return (<NChecks alwaysEditable={alwaysEditable} length={20} name={name} />)
        default:
            return (<div>FIELD NOT IMPLEMENTED {t(name)}, {type}</div>)
    }
}

export const Skill: React.FC<SkillType> = ({name, nameStyle, type, table, alwaysEditable}) => {
    const SkillInputComponent = getSkillInputComponent({name, type, table, alwaysEditable})
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