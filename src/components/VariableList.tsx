import { useState } from "react"
import { AddButton, RemoveButton } from "./Buttons"
import { FiveChecks } from "./FiveChecks"
import { Text } from "./Text"
import styled from 'styled-components'

const ListItem = styled.div`
    display: flex;
    justify-content: space-between;
`

export const VariableList = () => {
    const [list, setList] = useState([{name:'',value:0}])

    const addNew = () => setList([...list, {name:'',value:0}])
    const remove = i => setList(list.splice(i))
    return (
        <div>
            {list.map((item,i)=>(
                <ListItem key={i}>
                    <Text value={item.name}/>
                    <FiveChecks value={item.value} />
                </ListItem>
            ))}
            <AddButton onClick={addNew} />
        </div>
    )
}