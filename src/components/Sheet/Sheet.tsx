import { Section } from "../index"
import styled from 'styled-components'
import { useForm, FormProvider } from "react-hook-form"
import { SheetProps } from "./types"
import { encodeForm, decodeForm } from "./helpers"
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
    const {handleSubmit, reset} = methods
    const changeQueryString = (form: any) => {
        const queryString = encodeForm(form, defaultValues)
        var newRelativePathQuery = window.location.pathname + '?' + queryString.toString();
        history.pushState(null, '', newRelativePathQuery)
    }
    const onSubmit = handleSubmit(changeQueryString)

    useEffect(() => {
        const formValues = decodeForm(window.location.search)
        console.log(formValues)
        reset({
            ...defaultValues,
            ...formValues
        })
    }, [window.location.search])


    return (
    <FormProvider {...methods} >
        <SheetCenterer>
            <SheetWrapper>
                <form>
                    <button type="button" onClick={onSubmit}>Finish</button>
                    {sections.map((section,i)=><Section key={i} {...section}/>)}
                </form>
            </SheetWrapper>
        </SheetCenterer>
    </FormProvider>
    )
}
