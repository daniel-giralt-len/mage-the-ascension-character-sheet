import { ConfigurationHeader, Section } from "../index"
import styled from 'styled-components'
import { useForm, FormProvider } from "react-hook-form"
import { SheetProps } from "./types"
import { encodeForm, decodeForm } from "./helpers"
import { useEffect } from "react"
import { GlobalStyle } from "./styles"

const SheetCenterer = styled.div`
    display:flex;
    justify-content: center;
`

const SheetWrapper = styled.div`
    max-width: 800px;
`

export const Sheet: React.FC<SheetProps> = ({sections, defaultValues}) => {
    const methods = useForm({defaultValues})
    const {handleSubmit, reset, setValue} = methods
    const changeQueryString = (form: any) => {
        setValue('readOnly', true)
        const queryString = encodeForm(form, defaultValues)
        var newRelativePathQuery = window.location.pathname + '?' + queryString.toString();
        history.pushState(null, '', newRelativePathQuery)
    }
    const onSubmit = handleSubmit(changeQueryString)
    const onEdit = () => setValue('readOnly', false)
    const onChangeLanguage = (langId: string) => setValue('language', langId)

    useEffect(() => {
        const formValues = decodeForm(window.location.search)
        reset({
            ...defaultValues,
            ...formValues
        })
    }, [window.location.search])

    return (
    <FormProvider {...methods} >
        <GlobalStyle/>
        <SheetCenterer>
            <SheetWrapper>
                <form>
                    <ConfigurationHeader
                        onSubmit={onSubmit}
                        onEdit={onEdit}
                        onChangeLanguage={onChangeLanguage}
                    />
                    {sections.map((section,i)=><Section key={i} {...section}/>)}
                </form>
            </SheetWrapper>
        </SheetCenterer>
    </FormProvider>
    )
}
