import styled from 'styled-components'
import { TenChecks } from './TenChecks'

const SkillWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const DoubleTen = () => {
    return (<SkillWrapper>
        <TenChecks />
        <TenChecks isSquare />
    </SkillWrapper>)
}