Feature: Feature name

    Feature Description: Register

    Scenario: Register
        Given I open home page
        Then I click register button
        Then I input email "testemail@gm.com" 
        Then I input username "testemail" 
        Then I input firstname "testname" 
        Then I input lastname "testlastname" 
        Then I input phone "0900001234" 
        Then I input password "abcdefg12345!"
        Then I click complete register button
    
    Scenario: Login
        Given I open login page
        Then I login with email "testemail@gm.com" password "abcdefg12345!"