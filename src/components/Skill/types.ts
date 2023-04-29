import { TableDataType } from "../Table/types";

export type SkillType = {
    name?: string
    nameStyle?: string
    table?: TableDataType
    type: "addableList" | "doubleTen" | "five" | "number" | "table" | "ten" | "text" | "wheel"
}