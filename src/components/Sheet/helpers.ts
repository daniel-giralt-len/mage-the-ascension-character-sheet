import { SectionProps } from "../Section/types";
import { SkillType } from "../Skill/types"
import { RowType } from "../SkillRow/types"
import { getFieldDefaultValueType } from "./types";

const getFieldData = (sheetData: Array<SectionProps>): Array<SkillType> => {
    const fieldData: Array<SkillType> = []
    sheetData.forEach((section: SectionProps) => {
        section.rows.forEach((row: RowType) => {
            row.fields.forEach((field: SkillType) => {
                fieldData.push(field)
            })
        })
    })
    return fieldData
}


const typeToDefaultValue = {
    addableList: [],
    doubleTen: [0,0],
    five: 0,
    number: 0,
    table: false,
    ten: 0,
    text: '',
    wheel: [0,0],
}

const getFieldDefaultValue: getFieldDefaultValueType = (field) => {
    const defaultValue = typeToDefaultValue[field.type]
    if(field.type === 'table'){
        return Array(field?.table?.length || 0).fill(defaultValue)
    }
    return defaultValue
}

export const getDefaultFormValues = (sheetData: Array<SectionProps>) => {
    return getFieldData(sheetData)
        .reduce((acc, field: SkillType) => {
            acc[field?.name] = getFieldDefaultValue(field)
            return acc
        }, {})
}