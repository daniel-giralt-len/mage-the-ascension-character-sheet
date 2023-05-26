import { useFormContext } from "react-hook-form";
import { HeaderWrapper, LanguageWrapper, SaveInstructionsWrapper } from "./styles";
import { ConfigurationHeaderProps } from "./types";
import translations from '../../translations.json'
import { t } from '../../translations'
import { ConfigButton } from "../index";

export const ConfigurationHeader: React.FC<ConfigurationHeaderProps> = ({
    onSubmit,
    onEdit,
    onChangeLanguage,
}) => {
    const {watch} = useFormContext()
    const readOnly = watch('readOnly')
    const selectedLanguage = watch('language')
    return (
        <HeaderWrapper>
            {readOnly
                ? (<ConfigButton type='button' onClick={onEdit}>{t('Edit')}</ConfigButton>)
                : (<ConfigButton type='button' onClick={onSubmit}>{t('Save')}</ConfigButton>)
            }
            {readOnly && 
                (<SaveInstructionsWrapper>
                    {t('SaveInstructions')}
                </SaveInstructionsWrapper>)
            }
            <LanguageWrapper>
                {Object.keys(translations).map(langId => {
                    const isSelected = selectedLanguage === langId
                    return (
                    <ConfigButton isSelected={isSelected} type='button' key={langId} onClick={()=> onChangeLanguage(langId)}>{isSelected ? '>':''}{t(langId)}</ConfigButton>
                )
                })}
            </LanguageWrapper>
        </HeaderWrapper>
    )
}