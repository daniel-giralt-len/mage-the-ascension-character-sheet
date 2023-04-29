import { NChecks } from "../index"
import { NChecksProps } from "../NChecks/types"

export const TenChecks: React.FC<NChecksProps> = ({isSquare}) => (<NChecks isSquare={isSquare} length={10}/>)