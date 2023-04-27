import styled from 'styled-components'
import { Check } from './Check'

const TableWrapper = styled.div`
    display:grid;
    grid-template-rows: repeat(${({nRows})=>nRows},1fr);
    grid-template-columns: repeat(${({nCols})=>nCols},1fr);
`

export const Table = ({data = [[]]}) => {
    return (
        <TableWrapper nCols={data[0].length} nRows={data.length}>
            {data.map((rowData,i) => rowData.map((cell,j) => {
                const key = `${i}-${j}`
                if(cell==='checkbox'){
                    return <Check key={key}/>
                }
                return <div key={key}>{cell}</div>
            } ))}
        </TableWrapper>
    )
}