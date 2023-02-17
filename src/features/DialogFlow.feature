Feature: Login app

    Scenario Outline: TC_01 User go through the dialog journey

    Given Verify the "<APIDemos>" is displayed on the screen
    When User click on the App link
    Then USer should see the "<AlertDialogs>" link
    And User clicks on Alert Dailog link
    And User clicks on List Dialog Link
    Then User should see the dialog  window
    Then User click on Command One link
Examples:
    |APIDemos |AlertDialogs |
    |API Demos|Alert Dialogs|



