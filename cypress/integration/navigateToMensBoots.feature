Feature: Navigate to Mens Boots Page
  Description: As a user I should be able to navigate to mens boots section of the website

  Scenario: Navigate to Mens Boots
    Given I am on the homepage
    And I select men category from the header
    Then I should see the list of products
    When I select boots category
    Then I should see only boots