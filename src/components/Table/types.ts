export type TableDataType = Array<Array<string>>

export type TableType = {
    data?: TableDataType
    name?: string
}

export type TableWrapperType = {
    nRows: number
    nCols: number
}