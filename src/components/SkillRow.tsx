import { SectionRowHeader } from "./Headers"
import { Skill } from "./Skill"

export const SkillRow = ({title, fields, fieldsType}) => {
    const sortedFields = [...fields]
    sortedFields.sort()

    return (<div>
        <SectionRowHeader>{title}</SectionRowHeader>
        {sortedFields.map((field,i)=>{
            if(typeof field === 'string'){
                return (<Skill name={field} type={fieldsType} key={i}/>)
            }
            return (<Skill name={field.name} type={field.type || fieldsType} table={field.table} key={i}/>)

        })}
    </div>)
}