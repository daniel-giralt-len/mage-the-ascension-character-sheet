import { useFormContext } from "react-hook-form"
import { CounterProps } from "./types"

export const Counter: React.FC<CounterProps> = ({ name, alwaysEditable }) => {
    const { register, watch } = useFormContext()
    const readOnly = watch('readOnly') && !alwaysEditable
    return (<input disabled={readOnly} type='number' min={0}
        {...register(name, {valueAsNumber: true})}
    />)
}