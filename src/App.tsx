import sheetData from './sheetData.json'
import { Sheet } from './Sheet'

export default ()=>{
  return (<Sheet {...sheetData}/>)
}
