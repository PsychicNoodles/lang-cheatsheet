Feature: Korean IME
  
  Tests the integration of the Korean IME with various pages. 

  Scenario: Korean Consonant Pronunciation

    Verifies integration with the Korean Consonant Pronunciation page.

    Given the user has navigated to the "힌국어 Consonants" page
    And the user has selected the "Romaja" input mode
    When the user types "annyeonghaseyo"
    Then "안녕하세요" should appear in the "output" element