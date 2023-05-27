Feature: Testing ghost app

@user1 @web
Scenario: Activar o desactivar el modo oscuro.
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I log in 'input[class="gh-input email"]' 'input[class="gh-input password"]' 'button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon ember-view"]'
  And I wait for 5 seconds
  And I click a button "Click on the General page" 'div[class="nightshift-toggle-container"]'
  And I wait for 3 seconds
  And I click a button "Click on the General page" 'div[class="nightshift-toggle-container"]'
  And I wait for 3 seconds
  Then I change sshots names