Feature: Korean Consonant Pronunciation

  Background:
    Given the user has navigated to the "힌국어 Consonants" page

  Scenario Outline: Resyllabification
    
    Enters sample syllables with each Korean consonant followed by
    syllables with each vowel and tests the output for correct resyllabification.

    Given the user enters <cons> as the first syllable
    And the user enters <vowel> as the second syllable
    When we are finished processing
    Then the pronunciation result should be <result>