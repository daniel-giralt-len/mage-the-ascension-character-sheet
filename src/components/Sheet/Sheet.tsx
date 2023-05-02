import { Section } from "../index"
import styled from 'styled-components'
import { useForm, FormProvider } from "react-hook-form"
import { SheetProps } from "./types"
import { useEffect } from "react"

const SheetCenterer = styled.div`
    display:flex;
    justify-content: center;
`

const SheetWrapper = styled.div`
    max-width: 800px;
`

export const Sheet: React.FC<SheetProps> = ({sections, defaultValues}) => {
    const methods = useForm({defaultValues})
    const {watch, getValues} = methods
    const handleSubmit = () => {
    }
    useEffect(handleSubmit, [watch, getValues()])
    return (
    <FormProvider {...methods} >
        <SheetCenterer>
            <SheetWrapper>
                <form onSubmit={handleSubmit}>
                    {sections.map((section,i)=><Section key={i} {...section}/>)}
                    <input type="submit"/>
                </form>
            </SheetWrapper>
        </SheetCenterer>
    </FormProvider>
    )
}
