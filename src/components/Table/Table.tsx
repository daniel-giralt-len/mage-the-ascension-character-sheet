import styled from 'styled-components'
import { Check } from "../index"
import { TableType, TableWrapperType } from './types'

const TableWrapper = styled.div<TableWrapperType>`
    display:grid;
    grid-template-rows: repeat(${({nRows})=>nRows},1fr);
    grid-template-columns: repeat(${({nCols})=>nCols},1fr);
`

export const Table: React.FC<TableType> = ({data = [[]]}) => {
    return (
        <TableWrapper nCols={data[0].length} nRows={data.length}>
            {data.map((rowData,i) => rowData.map((cell,j) => {
                const key = `${i}-${j}`
                if(cell==='checkbox'){
                    return <Check isSquare key={key}/>
                }
                return <div key={key}>{cell}</div>
            } ))}
        </TableWrapper>
    )
}