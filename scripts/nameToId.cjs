const fs = require('fs')
const defaultValuesPath = './src/defaultSheetValues.json'
const sheetDataPath = './src/sheetData.json'
const translationPath = './src/translations.json'

const change = (path, f) => {
    const inFile = JSON.parse(fs.readFileSync(path))
    const output = f(inFile)
    
    fs.writeFileSync(path, JSON.stringify(output, null, 2))
}

const nameToId = {
    Name: 0,
    Player: 1,
    Chronicle: 2,
    Nature: 3,
    Demeanor: 4,
    Essence: 5,
    Affiliation: 6,
    Sect: 7,
    Concept: 8,
    Strength: 9,
    Dexterity: 10,
    Stamina: 11,
    Charisma: 12,
    Manipulation: 13,
    Appearance: 14,
    Intelligence: 15,
    Perception: 16,
    Wits: 17,
    Alertness: 18,
    Art: 19,
    Athletics: 20,
    Awareness: 21,
    Brawl: 22,
    Empathy: 23,
    Expression: 24,
    Intimidation: 25,
    Leadership: 26,
    Streetwise: 27,
    Subterfuge: 28,
    Crafts: 29,
    Drive: 30,
    Etiquette: 31,
    Firearms: 32,
    'Martial Arts': 33,
    Meditation: 34,
    Melee: 35,
    Research: 36,
    Stealth: 37,
    Survival: 38,
    Technology: 39,
    Academics: 40,
    Computer: 41,
    Cosmology: 42,
    Enigmas: 43,
    Esoterica: 44,
    Investigation: 45,
    Law: 46,
    Medicine: 47,
    Occult: 48,
    Politics: 49,
    Science: 50,
    Correspondence: 51,
    Entropy: 52,
    Foces: 53,
    Life: 54,
    Matter: 55,
    Mind: 56,
    Prime: 57,
    Spirit: 58,
    Time: 59,
    Backgrounds: 60,
    'Other Traits': 61,
    Arete: 62,
    Willpower: 63,
    Quintessence: 64,
    Health: 65,
    Experience: 66
  }

const sheetData = input => {
}

const shallow = input => {
    return Object.entries(input).reduce((acc, [k,v]) => {
        if(!nameToId[k]){
            nameToId[k] = Object.values(nameToId).length
        }
        acc[nameToId[k]] = v
        return acc
    },{})
}

const translations = input => {
    return {
        en: shallow(input.en)
    }
}

//change(defaultValuesPath, shallow)
//change(translationPath, translations)
change(sheetDataPath, sheetData)