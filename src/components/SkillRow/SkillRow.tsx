import { t } from "../../translations"
import { SectionRowHeader, Skill } from "../index"
import { RowType } from "./types"

export const SkillRow: React.FC<RowType> = ({fields, title}) => {
    const sortedFields = [...fields]
    sortedFields.sort()

    return (<div>
        <SectionRowHeader>{t(title)}</SectionRowHeader>
        {sortedFields.map(({name, nameStyle, type, table, alwaysEditable},i)=>{
            return (<Skill alwaysEditable={alwaysEditable} name={name} nameStyle={nameStyle} type={type} table={table} key={i}/>)
        })}
    </div>)
}