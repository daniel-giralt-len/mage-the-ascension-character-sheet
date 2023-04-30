import { useState } from "react"
import { AddButton, FiveChecks, Text } from "../index"
import styled from 'styled-components'
import { VariableListProps } from "./types"

const ListItem = styled.div`
    display: flex;
    justify-content: space-between;
`

export const VariableList: React.FC<VariableListProps
> = ({name}) => {
    const [list, setList] = useState([{name:'',value:0}])

    const addNew = () => setList([...list, {name:'',value:0}])
    return (
        <div>
            {list.map((_,i)=>(
                <ListItem key={i}>
                    <Text name={`${name}.${i}.0`}/>
                    <FiveChecks name={`${name}.${i}.1`} />
                </ListItem>
            ))}
            <AddButton onClick={addNew} />
        </div>
    )
}