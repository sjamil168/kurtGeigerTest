#feature file for test case
#Cypress reuses steps that are identical, ('I select men category from the header' in this case) this reduces effort so user does not have to write additional code

Feature: Navigate to Checkout Page
  Description: As a user I should be able to navigate to checkout page after adding item to basket

  Scenario: Navigate to Mens Boots
    Given I select men category from the header
    And I am on PDP
    When I select any colour and size for the chosen men category
    And I add the product to the bag
    Then I can see the bag with single item
    And I click Proceed to Checkout
    Then I should be on checkout page