Feature: Feature name

    Feature Description: Register

    Scenario: Register
        Given I open home page
        Then I click register button
        Then I input email "testemail@gm.com" username "testemail" firstname "testname" lastname "testlastname" phone "0900001234" password "abcdefg12345!"
        Then I click complete register button
    
    Scenario: Login
        Given I open login page
        Then I login with email "testemail@gm.com" password "abcdefg12345!"