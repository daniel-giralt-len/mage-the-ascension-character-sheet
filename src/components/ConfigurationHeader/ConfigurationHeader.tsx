import { useFormContext } from "react-hook-form";
import { HeaderWrapper, LanguageWrapper, SaveInstructionsWrapper } from "./styles";
import { ConfigurationHeaderProps } from "./types";
import translations from '../../translations.json'
import { t } from '../../translations'

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
                ? (<button type='button' onClick={onEdit}>{t('Edit')}</button>)
                : (<button type='button' onClick={onSubmit}>{t('Save')}</button>)
            }
            {readOnly && 
                (<SaveInstructionsWrapper>
                    {t('SaveInstructions')}
                </SaveInstructionsWrapper>)
            }
            <LanguageWrapper>
                {Object.keys(translations).map(langId => (
                    <button type='button' key={langId} onClick={()=> onChangeLanguage(langId)}>{selectedLanguage === langId ? '>':''}{t(langId)}</button>
                ))}
            </LanguageWrapper>
        </HeaderWrapper>
    )
}