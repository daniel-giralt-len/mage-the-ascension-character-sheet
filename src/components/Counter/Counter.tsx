import { useFormContext } from "react-hook-form"
import { CounterProps } from "./types"

export const Counter: React.FC<CounterProps> = ({ name }) => {
    const { register } = useFormContext()
    return (<input type='number' min={0}
        {...register(name, {valueAsNumber: true})}
    />)
}