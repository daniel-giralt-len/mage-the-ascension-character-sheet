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
import { useFormContext } from "react-hook-form"

const SkillWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const getSkillInputComponent: getSkillInputComponentType = ({name, register, type, table}) => {
    switch(type) {
        case 'addableList':
            return (<VariableList{...register(name)} />)
        case 'table':
            return (<Table data={table}{...register(name)} />)
        case 'five':
            return (<FiveChecks {...register(name)} />)
        case 'ten':
            return (<TenChecks {...register(name)} />)
        case 'doubleTen':
            return (<DoubleTen {...register(name)} />)
        case 'text':
            return (<Text{...register(name)} />)
        case 'number':
            return (<Counter {...register(name)} />)
        case 'wheel':
            return (<NChecks length={20} {...register(name)} />)
    }
}

export const Skill: React.FC<SkillType> = ({name, nameStyle, type, table}) => {
    const { register } = useFormContext()
    const SkillInputComponent = getSkillInputComponent({name, register, type, table})
    if(nameStyle === 'header'){
        return (<>
            <SectionRowHeader>{name}</SectionRowHeader>
            <SkillWrapper>
                {SkillInputComponent}
            </SkillWrapper>
        </>)
    }
    
    return (<SkillWrapper>
        {name}
        {SkillInputComponent}
    </SkillWrapper>)
}