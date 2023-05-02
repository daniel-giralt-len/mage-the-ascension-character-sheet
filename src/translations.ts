import translations from './translations.json'

const missingTranslations: {[lang:string]: { [key:string]: string }} = {}

export const t = (key: string | undefined, lang: string = 'en') => {
    if(!key){
        return
    }
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