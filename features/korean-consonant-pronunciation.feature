Feature: Korean Consonant Pronunciation

  Background:
    Given the user has navigated to the "힌국어 Consonants" page

  Scenario: Resyllabification
    Given the user has enabled "Resyllabification"
    When the user enters "책을"
    Then a "resyl" explanation for each syllable should appear
    And the first syllable should be "채" with "Gives ㄱ" detail
    And the second syllable should be "글" with "Recieves ㄱ" detail

  Scenario: Resyllabification (none needed)
    Given the user has enabled "Resyllabification"
    When the user enters "안녕"
    Then a "resyl" explanation should *not* appear