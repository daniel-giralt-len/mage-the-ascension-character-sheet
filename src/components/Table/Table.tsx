import styled from 'styled-components'
import { useFormContext } from "react-hook-form"
import { Check } from "../index"
import { TableType, TableWrapperType } from './types'

const TableWrapper = styled.div<TableWrapperType>`
    display:grid;
    grid-template-rows: repeat(${({nRows})=>nRows},1fr);
    grid-template-columns: repeat(${({nCols})=>nCols},1fr);
`

export const Table: React.FC<TableType> = ({data = [[]], name}) => {
    const {getValues, setValue, watch} = useFormContext()
    const checks = watch(name)
    const toggleTableRow = (i: number) => {
        const previousState = getValues(name)
        previousState[i] = !previousState[i]
        setValue(name, previousState)
    }
    return (
        <TableWrapper nCols={data[0].length} nRows={data.length}>
            {data.map((rowData,i) => rowData.map((cell,j) => {
                const key = `${i}-${j}`
                if(cell==='checkbox'){
                    return <Check
                        key={key}
                        isChecked={checks[i]}
                        onClick={() => toggleTableRow(i)}
                        isSquare
                    />
                }
                return <div key={key}>{cell}</div>
            } ))}
        </TableWrapper>
    )
}