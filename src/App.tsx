import sheetData from './sheetData.json'
import { Sheet } from './components/Sheet/Sheet'

export default ()=>{
  return (<Sheet {...sheetData}/>)
}
