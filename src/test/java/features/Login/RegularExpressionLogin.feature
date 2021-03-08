Feature: Login Page

  Scenario Outline: User should or not be able to login with certain credentials
    Given User is on landing page as "<url>"
    When User clicks the LoginRegister button
    And User enters Login Name as "<LoginName>"
    And User enters Password as "<Password>"
    When User clicks on Login button
    Then User gets a confirmation message as "<Remark>"

    Examples:
      | url                             | LoginName            | Password    | Remark             |
      | https://automationteststore.com | datastudioplaceWrong | Manchester1 | RETURNING CUSTOMER |
      | https://automationteststore.com | datastudioplace      | Manchester1 | Account Dashboard  |

