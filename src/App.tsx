import sheetData from './sheetData.json'
import defaultSheetValues from './defaultSheetValues.json' 
import { Sheet } from './components/Sheet/Sheet'

export default ()=>{
  return (<Sheet sections={sheetData.sections} defaultValues={defaultSheetValues} />)
}
