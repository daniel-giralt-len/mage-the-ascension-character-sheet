import { SectionProps } from "../Section/types";
import { SkillType } from "../Skill/types";

export type SheetProps = {
    sections: Array<SectionProps>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type getFieldDefaultValueType = (field: SkillType) => any