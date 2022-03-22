@Edit
Feature: Login feature

  @edit @success
  Scenario Outline: User want to edit Profile in QASIR web application
    Given user open google web
    Then user want to check the web
    Then user click email title
    Then user click email field
    And user input "<email>"
    Then user click field pin
    When user input the "<pin>"
    Then user login to dashboard QASIR
    And user have to choose menu outlet
    Then user click edit button
    Then user input field "<nama>"
    Then user also input field "<alamat>"
    Then user click button SIMPAN


    Examples:
      | email | pin | nama | alamat | kelurahan |
      | harianjarichad99@gmail.com | 121296 | nama test | alamat test | tanjung duren |
