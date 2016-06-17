const CONS_START = 0x314F
const CONS_END = 0x3163
const VOWEL_START = 0x3131
const VOWEL_END = 0x314E

let inRange = (num, start, end) => num >= start && num <= end

export function isJamoVowel(jamo) => inRange(jamo.charCodeAt(0), CONS_START, CONS_END)

export function isJamoConsonant(jamo) => inRange(jamo.charCodeAt(0), VOWEL_START, VOWEL_END)

export function hasConsonantEnding(syl) => (syl.charCodeAt(0) - 0xAC00) % 28 != 0

export function getConsonantEnding(syl) => {
  if(hasConsonantEnding(syl)) {
    
  } else return null
}

export function dropConsonantEnding(syl) => [...Array(19)].map((_, i) => i * 587).reverse().find((i) => i < syl.charCodeAt(0))