import { NChecks } from "../index"
import { NChecksProps } from "../NChecks/types"

export const TenChecks: React.FC<NChecksProps> = ({isSquare, name, alwaysEditable}) => (<NChecks alwaysEditable={alwaysEditable} name={name} isSquare={isSquare} length={10}/>)