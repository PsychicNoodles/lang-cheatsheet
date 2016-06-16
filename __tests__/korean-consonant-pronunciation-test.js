// import KoreanConsonantRules from '../src/app/components/korean/consonant-rules'

// import React from 'react'

// import Main from '../src/app/main'

// import {shallow, mount} from 'enzyme'
// import {expect} from 'chai'

// describe('Korean Consonant Rules component', function() {
//   let mainEle, consRulesComp;
//   beforeEach(function() {
//     mainEle = mount(<Main/>)
//     expect(mainEle).to.not.be(undefined)
//     mainEle.find("#korean-consonant-rules").simulate('click')
//     consRulesComp = mainEle.find('#content').first()
//   })

//   describe('app bar', function() {
//     it('should open a dialog upon tapping the right icon', function() {
//       let appBar = mainEle.find('#appbar')
//       let rightIcon = appBar.find('button').last()
//       rightIcon.simulate('click')
//       expect(consRulesComp.find('#enabled-rules-dialog')).to.have.length(1)
//     })
//   })

//   describe('enabled rules dialog', function() {
//     it('should list every rule')

//     it('should allow toggling every rule')

//     it('should have a save feature')

//     it('should have a discard feature')

//     it('should close upon save or discard')

//     it('should persist after saving')

//     it('should reset after discarding')
//   })

//   describe('content', function() {
//     describe('input', function() {
//       it('should take Korean characters')

//       it('should have Korean IME mode')

//       it('should reject non-Korean characters')
//     })

//     describe('output', function() {
//       it('should show notes for each syllable')

//       it('should only show notes for each enabled rule')

//       it('should show details when tapping a specific note')

//       describe('resyllabification', function() {
//         describe('when entering a syl ending with a cons followed by a syl starting with a vowel', function() {
//           var tests = [
//             {arg: "익이", expect: ["이", "기"]},
//             {arg: "읶이", expect: ["이", "끼"]},
//             {arg: "잌이", expect: ["이", "키"]},
//             {arg: "읻이", expect: ["이", "디"]},
//             {arg: "잍이", expect: ["이", "티"]},
//             {arg: "잇이", expect: ["이", "시"]},
//             {arg: "있이", expect: ["이", "씨"]},
//             {arg: "잊이", expect: ["이", "지"]},
//             {arg: "잋이", expect: ["이", "치"]},
//             {arg: "인이", expect: ["이", "니"]},
//             {arg: "일이", expect: ["이", "리"]},
//             {arg: "입이", expect: ["이", "비"]},
//             {arg: "잎이", expect: ["이", "피"]},
//             {arg: "임이", expect: ["이", "미"]},
//             {arg: "잏이", expect: ["이", "히"]}
//           ]
//           tests.forEach(function(test) {
//             it('should remove the cons from the first syl', function() {

//             })
//           })
//           it('should replace the initial vowel from the second syl with the cons from the first syl')
//         })
//         describe('when entering a syl ending with a double cons followed by a syl starting with a vowel', function() {
//           it('should remove the second final cons from the first syl')
//           it('should replace the initial vowel from the second syl with the cons from the first syl')
//         })
//       })
//       describe('syllable-final closure', function() {
//         describe('when entering a syl ending with a cons at end of a word', function() {
//           it('should change the final cons from the first syl')
//         })
//         describe('when entering a syl ending with a cons before another cons', function() {
//           it('should change the final cons from the first syl')
//         })
//       })
//       describe('nasal assimilation', function() {
//         describe('when entering a syl ending with a cons before a ㅁ', function() {
//           it('')
//         })
//       })
//     })
//   })
// })