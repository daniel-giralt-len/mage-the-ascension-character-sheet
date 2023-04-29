import { useState } from "react"
import { AddButton, FiveChecks, Text } from "../index"
import styled from 'styled-components'

const ListItem = styled.div`
    display: flex;
    justify-content: space-between;
`

export const VariableList = () => {
    const [list, setList] = useState([{name:'',value:0}])

    const addNew = () => setList([...list, {name:'',value:0}])
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