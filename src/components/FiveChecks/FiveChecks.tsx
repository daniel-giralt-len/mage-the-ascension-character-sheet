import { NChecks } from "../index"
import { NChecksProps } from "../NChecks/types"

export const FiveChecks: React.FC<NChecksProps> = ({name}) => (<NChecks name={name} length={5}/>)
