Feature: Korean Consonant Pronunciation

  Tests the Korean consonant pronunciation rules as specified in
  Integrated Korean Beginning Level 1.

  Each rule has a scenario for each major variation, meaning a
  the conditions are distinct (and not meaning a different consonant
  becomes something else, those specific tests are implemented as
  unit tests), as well as for inputs that do not trigger the rule.

  Background:
    Given the user has navigated to the "힌국어 Consonants" page

  Scenario: Resyllabification (non-double consonant ending)
    Given the user has enabled "Resyllabification"
    When the user enters "한글은"
    Then "resyl" explanations should appear
    And the second syllable should be "그" with "Gives ㄹ" brief and "글 ends with a consonant and is followed by a syllable starting with a vowel, so its final consonant ㄹ is given to the next syllable" detail
    And the third syllable should be "른" with "Receives ㄹ" brief and "은 starts with a vowel and is preceded by a syllable ending with a consonant, so it receives the final consonant ㄹ" detail

  Scenario: Resyllabification (double consonant ending)
    Given the user has enabled "Resyllabification"
    When the user enters "읽어요"
    Then "resyl" explanations should appear
    And the first syllable should be "일" with "Gives ㄱ" brief and "읽 ends with a double consonant and is followed by a syllable starting with a vowel, so from its double consonant ending, ㄺ, the second consonant ㄱ is given to the next syllable" detail
    And the second syllable should be "거" with "Receives ㄱ" brief and "어 starts with a vowel and is preceded by a syllable ending with a double consonant, so from the double consonant ending, ㄺ, it receives the second consonant ㄱ" detail

  Scenario: Resyllabification (none)
    Given the user has enabled "Resyllabification"
    When the user enters "안녕"
    Then a "resyl" explanation should *not* appear

  Scenario: Syllable-final Closure (end of word)
    Given the user has enabled "Syllable-final Closure"
    When the user enters "꽃"
    Then a "sylfinal" explanation should appear
    And the first syllable should be "꼳" with "ㅊ becomes ㄷ" brief and "꽃 ends with a consonant and is the end of a word, so its final consonant ㅊ is pronounced as the unreleased stop ㄷ" detail

  Scenario: Syllable-final Closure (before a consonant)
    Given the user has enabled "Syllable-final Closure"
    When the user enters "꽃도"
    Then "sylfinal" explanations should appear
    And the first syllable should be "꼳" with "ㅊ becomes ㄷ" brief and "꽃 ends with a consonant and is followed by a syllable starting with a consonant, so its final consonant ㅊ is pronounced as the unreleased stop ㄷ" detail

  Scenario: Syllable-final Closure (none)
    Given the user has enabled "Syllable-final Closure"
    When the user enters "안녕"
    Then a "sylfinal" explanation should *not* appear

  Scenario: Nasal Assimilation
    Given the user has enabled "Nasal Assimilation"
    When the user enters "입만"
    Then a "nasalass" explanation should appear
    And the first syllable should be "암" with "ㅂ becomes ㅁ" brief and "입 ends with a consonant and is followed by a syllable starting with ㅁ, so its final consonant ㅂ is pronounced as the nasal consonant ㅁ" detail

  Scenario: Nasal Assimilation (none)
    Given the user has enabled "Nasal Assimilation"
    When the user enters "안녕"
    Then a "nasalass" explanation should *not* appear

  Scenario: ㄴ to ㄹ Assimilation (ㄹ followed by ㄴ)
    Given the user has enabled "ㄴ to ㄹ Assimilation"
    When the user enters "칠년"
    Then a "n2rass" explanation should appear
    And the second syllable should be "련" with "ㄴ becomes ㄹ" brief and "년 starts with ㄴ and is preceded by a syllable ending with ㄹ, so its initial consonant ㄴ is pronounced as ㄹ" detail

  Scenario: ㄴ to ㄹ Assimilation (ㄹ preceded by ㄴ)
    Given the user has enabled "ㄴ to ㄹ Assimilation"
    When the user enters "신라"
    Then a "n2rass" explanation should appear
    And the first syllable should be "실" with "ㄴ becomes ㄹ" brief and "신 ends with ㄴ and is followed by a syllable starting with ㄹ, so its final consonant ㄴ is pronounced as ㄹ" detail

  Scenario: ㄴ to ㄹ Assimilation (ㄹ followed by 이)
    Given the user has enabled "ㄴ to ㄹ Assimilation"
    When the user enters "길이름"
    Then a "n2rass" explanation should appear
    And the second syllable should be "리" with "ㅇ becomes ㄹ" brief and "이 starts with 이 and is preceded by a syllable ending with ㄹ, so its initial ㅇ is pronounced as ㄹ" detail

  Scenario: ㄴ to ㄹ Assimilation (ㄹ followed by y-)
    Given the user has enabled "ㄴ to ㄹ Assimilation"
    When the user enters "물역"
    Then a "n2rass" explanation should appear
    And the second syllable should be "련" with "ㅇ + y- becomes ㄹ" brief and "역 starts with ㅇ + semivowel y and is preceded by a syllable ending with ㄹ, so its initial ㅇ is pronounced as ㄹ" detail

  Scenario: ㄴ to ㄹ Assimilation (none)
    Given the user has enabled "ㄴ to ㄹ Assimilation"
    When the user enters "안녕"
    Then a "n2rass" explanation should *not* appear

  Scenario: Tensification (fricative preceded by plosive)
    Given the user has enabled "Tensification"
    And the user has enabled "Syllable-final Closure"
    When the user enters "학생"
    Then a "tensify" explanation should appear
    And the second syllable should be "쌩" with "ㅅ becomes ㅆ" brief and "생 starts with the fricative consonant ㅅ and is preceded by a syllable ending with a plosive consonant, so its initial consonant ㅅ is tensified to ㅆ" detail

  Scenario: Tensification (plosive preceded by plosive)
    Given the user has enabled "Tensification"
    When the user enters "학교"
    Then a "tensify" explanation should appear
    And the second syllable should be "꾜" with "ㄱ becomes ㄲ" brief and "교 starts with a plosive consonant and is preceded by a syllable ending with a plosive consonant, so its initial consonant ㄱ is tensified to ㄲ" detail

  Scenario: Tensification (fricative preceded by fricative)
    Given the user has enabled "Tensification"
    When the user enters "재미있습니다"
    Then a "tensify" explanation should appear
    And the fourth syllable should be "씀" with "ㅅ becomes ㅆ" brief and "습 starts with the fricative consonant ㅅ and is preceded by a syllable ending with the fricative consonant ㅅ, so its initial consonant ㅅ is tensified to ㅆ" detail

  Scenario: Tensification (plosive preceded by fricative)
    Given the user has enabled "Tensification"
    When the user enters "씻고있어요"
    Then a "tensify" explanation should appear
    And the second syllable should be "꼬" with "ㄱ becomes ㄲ" brief and "고 starts with a plosive consonant and is preceded by a syllable ending with the fricative consonant ㅅ, so its initial consonant ㄱ is tensified to ㄲ" detail

  Scenario: Tensification (none)
    Given the user has enabled "Tensification"
    When the user enters "안녕"
    Then a "tensify" explanation should *not* appear

  Scenario: ㅎ Aspiration (ㅎ followed by consonant)
    Given the user has enabled "ㅎ Aspiration"
    When the user enters "좋다"
    Then "aspire" explanations should appear
    And the first syllable should be "조" with "Gives ㅎ" brief and "좋 ends with ㅎ and is followed by a syllable starting with a plain plosive consonant, so its final consonant ㅎ is merged into the next syllable" detail
    And the second syllable should be "타" with "ㄷ becomes ㅌ" brief and "다 begins with a plain plosive consonant and is preceded by a syllable ending with ㅎ, so its initial consonant ㄷ is pronounced as the aspirate consonant ㅌ" detail

  Scenario: ㅎ Aspiration (ㅎ preceded by consonant)
    Given the user has enabled "ㅎ Aspiration"
    When the user enters "입학"
    Then "aspire" explanations should appear
    And the first syllable should be "이" with "Gives ㅂ" brief and "입 ends with a plain plosive consonant and is followed by a syllable starting with ㅎ, so it merges the ㄷ into the next syllable" detail
    And the second syllable should be "팍" with "ㅎ becomes ㅍ" brief and "학 begins with ㅎ and is preceded by a syllable ending with a plain plosive consonant, so its initial consonant ㅎ is pronounced as the aspirate consonant ㅍ" detail

  Scenario: ㅎ Aspiration (ㅎ between voiced sounds)
    Given the user has enabled "ㅎ Aspiration"
    When the user enters "좋아요"
    Then an "aspire" explanation should appear
    And the first syllable should be "조" with "ㅎ becomes silent" brief and "The ㅎ is between the two voiced sounds, so it becomes silent" detail

  Scenario: ㅎ Aspiration (none)
    Given the user has enabled "ㅎ Aspiration"
    When the user enters "안녕"
    Then an "aspire" explanation should *not* appear

  Scenario: Double Consonant Reduction
    Given the user has enabled "Double Consonant Reduction"
    When the user enters "값"
    Then a "dubcons" explanation should appear
    And the first syllable should be "갑" with "ㅅ becomes silent" brief and "값 is the end of a word and ends with a double consonant, so the second final consonant ㅅ becomes silent"

  Scenario: Double Consonant Reduction (none)
    Given the user has enabled "Double Consonant Reduction"
    When the user enters "안녕"
    Then a "dubcons" explanation should *not* appear

  Scenario: Palatalization
    Given the user has enabled "Palatalization"
    When the user enters "붙이다"
    Then "palatize" explanations should appear
    And the first syllable should be "부" with "Gives ㅌ" detail
    And the second syllable should be "치" with "ㅇ becomes ㅊ" detail
