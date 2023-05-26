import { useState } from "react"
import { AddButton, FiveChecks, Text } from "../index"
import styled from 'styled-components'
import { VariableListProps } from "./types"
import { useFormContext } from "react-hook-form"

const ListItem = styled.div`
    display: flex;
    justify-content: space-between;
`

export const VariableList: React.FC<VariableListProps
> = ({name}) => {
    const {watch, setValue} = useFormContext()
    const readOnly = watch('readOnly')
    const list = watch(name)
    const addNew = () => setValue(`${name}.${list.length}`, ['',0])
    return (
        <div>
            {list.map((_,i)=>(
                <ListItem key={i}>
                    <Text name={`${name}.${i}.0`}/>
                    <FiveChecks name={`${name}.${i}.1`} />
                </ListItem>
            ))}
            {!readOnly && <AddButton onClick={addNew} />}
        </div>
    )
}