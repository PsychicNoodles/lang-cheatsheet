jest.unmock('../src/app/utils')

import {isJamoVowel, isJamoConsonant, hasConsonantFinal,
        getConsonantFinal, dropConsonantFinal, getConsonantInitial}
        from '../src/app/utils'

let vowels = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ',
              'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ']
let consonants = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅆ', 'ㅇ',
                  'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']
let dubCons = ['ㄳ', 'ㄵ', 'ㄶ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅃ', 'ㅄ']

let withFinals   = ['각', '깎', '갃', '난', '낝', '낞', '닫', '랄', '랅', '랆', '랇',
                    '랈', '랉', '랊', '랋', '맘', '밥', '밦', '삿', '쌌', '앙', '잦',
                    '찿', '캌', '탙', '팦', '핳']
// this indeed has duplicates, but it's parallel to withFinals
let woFinals     = ['가', '까', '가', '나', '나', '나', '다', '라', '라', '라', '라',
                    '라', '라', '라', '라', '마', '바', '바', '사', '싸', '아', '자',
                    '차', '카', '타', '파', '하']
let consFinals   = ['ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ',
                    'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ',
                    'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'] // parallel to withFinals
let consInitials = ['ㄱ', 'ㄲ', 'ㄱ', 'ㄴ', 'ㄴ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㄹ', 'ㄹ', 'ㄹ',
                    'ㄹ', 'ㄹ', 'ㄹ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅂ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ',
                    'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'] // parallel to withFinals

describe('isJamoVowel', () => {
  for(let v of vowels) {
    it('should identify the vowel ' + v, () => {
      expect(isJamoVowel(v)).toBeTruthy()
    })
  }

  for(let c of consonants) {
    it('should not identify the consonant ' + c, () => {
      expect(isJamoVowel(c)).toBeFalsy()
    })
  }

  for(let c of dubCons) {
    it('should not identify the double consonant ' + c, () => {
      expect(isJamoVowel(c)).toBeFalsy()
    })
  }
})

describe('isJamoConsonant', () => {
  for(let v of vowels) {
    it('should not identify the vowel ' + v, () => {
      expect(isJamoConsonant(v)).toBeFalsy()
    })
  }

  for(let c of consonants) {
    it('should identify the consonant ' + c, () => {
      expect(isJamoConsonant(c)).toBeTruthy()
    })
  }

  for(let c of dubCons) {
    it('should identify the double consonant ' + c, () => {
      expect(isJamoConsonant(c)).toBeTruthy()
    })
  }
})

describe('hasConsonantFinal', () => {
  for(let e of withFinals) {
    it('should identify the syllable with a consonant Final ' + e, () => {
      expect(hasConsonantFinal(e)).toBeTruthy()
    })
  }

  for(let e of woFinals) {
    it('should not identify the syllable without a consonant Final ' + e, () => {
      expect(hasConsonantFinal(e)).toBeFalsy()
    })
  }
})

describe('getConsonantFinal', () => {
  for(let i of Array(withFinals.length).fill().map((_, i) => i)) {
    it(`should return the consonant final ${consFinals[i]} of ${withFinals[i]}`, () => {
      expect(getConsonantFinal(withFinals[i])).toEqual(consFinals[i])
    })
  }
})

describe('dropConsonantFinal', () => {
  for(let i of Array(withFinals.length).fill().map((_, i) => i)) {
    it(`should remove the consonant Final ${consFinals[i]} of ${withFinals[i]}, ` +
       `resulting in ${woFinals[i]}`, () => {
      expect(dropConsonantFinal(withFinals[i])).toEqual(woFinals[i])
    })
  }
})

describe('getConsonantInitial', () => {
  for(let i of Array(withFinals.length).fill().map((_, i) => i)) {
    it(`should return the consonant initial ${consInitials[i]} of ${withFinals[i]}`, () => {
      expect(getConsonantInitial(withFinals[i])).toEqual(consInitials[i])
    })
  }
})
