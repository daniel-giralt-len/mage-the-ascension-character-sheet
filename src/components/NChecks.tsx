import { Check } from "./Check"
export const NChecks = ({isSquared, length=5}) => {
    
    return (
        <div>
        {Array(length).fill().map((_,i)=>{
            return (<Check key={i} isSquared={isSquared}/>)
        })}
        </div>
    )
}
