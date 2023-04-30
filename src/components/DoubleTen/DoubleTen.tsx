import styled from 'styled-components'
import { TenChecks } from "../index"
import { DoubleTenProps } from './types'

const SkillWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const DoubleTen: React.FC<DoubleTenProps> = ({name}) => {
    return (<SkillWrapper>
        <TenChecks name={`${name}.0`} />
        <TenChecks isSquare name={`${name}.1`} />
    </SkillWrapper>)
}