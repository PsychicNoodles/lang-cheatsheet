const CONS_START = 0x3131
const CONS_END = 0x314E
const VOWEL_START = 0x314F
const VOWEL_END = 0x3163
const SYL_START = 0xAC00
const SYL_END = 0xD7A3

// consonant offsets are compounding, so each must be decremented further
// from their corresponding invalid double consonant Final
const CONS_NOT_FINALS = [0x3138, 0x3142, 0x3147]
const CONS_NOT_INITIALS = [0x3133, 0x3135, 0x3136, 0x313A, 0x313B, 0x313C,
                           0x313D, 0x313E, 0x313F, 0x3140, 0x3144]

let inRange = (num, start, end) => num >= start && num <= end

export function isJamoVowel(jamo) { return inRange(jamo.charCodeAt(0), VOWEL_START, VOWEL_END) }

export function isJamoConsonant(jamo) { return inRange(jamo.charCodeAt(0), CONS_START, CONS_END) }

export function hasConsonantFinal(syl) { return (syl.charCodeAt(0) - SYL_START) % 28 != 0 }

export function getConsonantFinal(syl) {
  if(hasConsonantFinal(syl)) {
    let diff = (syl.charCodeAt(0) - SYL_START) % 28 - 1
    let cons = diff + CONS_START
    let sub = 0
    for(let unfinal of CONS_NOT_FINALS)
      if(unfinal <= cons) sub++
    cons += sub
    return String.fromCharCode(cons)
  }
  else return null
}

export function dropConsonantFinal(syl) {
  let diff = (syl.charCodeAt(0) - SYL_START) % 28
  return String.fromCharCode(syl.charCodeAt(0) - diff)
}

export function getConsonantInitial(syl) {
  let diff = Math.floor((syl.charCodeAt(0) - SYL_START) / 588)
}

export function replaceFirstJamo(syl, repl) {

}
