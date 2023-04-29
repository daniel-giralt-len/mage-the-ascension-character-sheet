import { SectionRowHeader, Skill } from "../index"

export const SkillRow = ({title, fields}) => {
    const sortedFields = [...fields]
    sortedFields.sort()

    return (<div>
        <SectionRowHeader>{title}</SectionRowHeader>
        {sortedFields.map(({name, nameStyle, type, table},i)=>{
            return (<Skill name={name} nameStyle={nameStyle} type={type} table={table} key={i}/>)
        })}
    </div>)
}