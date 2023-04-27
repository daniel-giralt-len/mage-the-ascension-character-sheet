import { FiveChecks } from "./FiveChecks"
import styled from 'styled-components'
import { Text } from "./Text"
import { SectionRowHeader } from "./Headers"
import { Counter } from "./Counter"
import { TenChecks } from "./TenChecks"
import { Table } from "./Table"
import { NChecks } from "./NChecks"

const SkillWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Skill = ({name, type, table}) => {
    if(type==='addableList'){
        return (<>
            <SectionRowHeader>{name}</SectionRowHeader>
            <SkillWrapper>
                <Text/>
                <FiveChecks/>
            </SkillWrapper>
        </>)
    }else if(type === 'table'){
        return (<>
            <SectionRowHeader>{name}</SectionRowHeader>
            <SkillWrapper>
                <Table data={table}/>
            </SkillWrapper>
        </>)
    }

    let Input = <FiveChecks/>
    if(type === 'text'){
        Input = <Text/>
    }else if(type === 'number'){
        Input = <Counter />
    }else if(type === 'ten'){
        Input = <TenChecks />
    }else if(type === 'doubleTen'){
        Input = (<>
            <TenChecks />
            <TenChecks isSquare />
        </>)
    }else if(type === 'wheel'){
        Input = <NChecks length={20} />
    }

    return (<SkillWrapper>
        {name}
        {Input}
    </SkillWrapper>)
}