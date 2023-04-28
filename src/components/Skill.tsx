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

export const Skill = ({name, type, table}) => {
    if(type==='addableList'){
        return (<SubSection name={name}>
                <VariableList/>
            </SubSection>)
    }else if(type === 'table'){
        return (<SubSection name={name}>
                <Table data={table}/>
            </SubSection>)
    }else if(type === 'ten'){
        return (<SubSection name={name}>
            <TenChecks />
        </SubSection>)
    }else if(type === 'doubleTen'){
        return (<SubSection name={name}>
            <DoubleTen />
        </SubSection>)
    }

    let Input = <FiveChecks/>
    if(type === 'text'){
        Input = <Text/>
    }else if(type === 'number'){
        Input = <Counter />
    }else if(type === 'wheel'){
        Input = <NChecks length={20} />
    }

    return (<SkillWrapper>
        {name}
        {Input}
    </SkillWrapper>)
}