import { useFormContext } from 'react-hook-form'
import translations from './translations.json'

const missingTranslations: {[lang:string]: { [key:string]: string }} = {}

export const t = (key: string | undefined) => {
    const { watch } = useFormContext()
    if(!key){
        return
    }
    const lang = watch('language')
    if(!translations[lang] && !missingTranslations[lang]){
        missingTranslations[lang] = {}
    }
    if(!translations[lang]?.[key]){
        missingTranslations[lang][key] = key
        console.log(missingTranslations)
        return key
    }
    return translations[lang][key]
}