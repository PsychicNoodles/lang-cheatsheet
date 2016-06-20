import {process} from '../src/app/components/korean/consonant-rules'

describe('Korean Consonant Pronunciation', () => {
  describe('Resyllabification', () => {
    it('should convert 긱이 to 기기', () => {
      let res = process('긱이')
      expect(res.reduce((p, c) => p + c.result, "")).toEqual('기기')
      expect(res[0].brief).toEqual('Gives ㄱ')
      expect(res[1].brief).toEqual('Receives ㄱ')
      expect(res[0].detail).toEqual('긱 ends with a consonant and is followed by a syllable starting with a vowel, so its final consonant ㄱ is given to the next syllable')
      expect(res[1].detail).toEqual('이 starts with a vowel and is preceded by a syllable Final with a consonant, so it receives the final consonant ㄱ')
    })
  })
})
