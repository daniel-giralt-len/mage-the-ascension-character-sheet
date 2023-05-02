const fs = require('fs')
const sheetData = JSON.parse(fs.readFileSync('./src/sheetData.json'))

const getFieldData = (sheetData) => {
    const fieldData = []
    sheetData.forEach((section) => {
        section.rows.forEach((row) => {
            row.fields.forEach((field) => {
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

const getFieldDefaultValue = (field) => {
    const defaultValue = typeToDefaultValue[field.type]
    if(field.type === 'table'){
        return Array(field?.table?.length || 0).fill(defaultValue)
    }
    return defaultValue
}

const getDefaultFormValues = (sheetData) => {
    return getFieldData(sheetData)
        .reduce((acc, field) => {
            acc[field?.name] = getFieldDefaultValue(field)
            return acc
        }, {})
}
const defaultValuesPath = './src/defaultSheetValues.json'
const defaultValues = getDefaultFormValues(sheetData.sections)
fs.writeFileSync(defaultValuesPath, JSON.stringify(defaultValues, null, 2))
