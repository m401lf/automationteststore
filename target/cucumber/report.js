$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AccountLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Login Page",
  "description": "",
  "id": "login-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "login-page;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on landing page as \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks the LoginRegister button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Login Name as \"\u003cLoginName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters Password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User is on Dashboard Page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks logoff button",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-page;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "url",
        "LoginName",
        "Password"
      ],
      "line": 13,
      "id": "login-page;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "https://automationteststore.com",
        "datastudioplace",
        "Manchester1"
      ],
      "line": 14,
      "id": "login-page;user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10437244100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "login-page;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on landing page as \"https://automationteststore.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks the LoginRegister button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Login Name as \"datastudioplace\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters Password as \"Manchester1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User is on Dashboard Page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks logoff button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://automationteststore.com",
      "offset": 28
    }
  ],
  "location": "LoginSteps.user_is_on_landing_page_as(String)"
});
formatter.result({
  "duration": 4705190600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_the_LoginRegister_button()"
});
formatter.result({
  "duration": 1833794800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "datastudioplace",
      "offset": 27
    }
  ],
  "location": "LoginSteps.user_enters_Login_Name_as(String)"
});
formatter.result({
  "duration": 755250500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manchester1",
      "offset": 25
    }
  ],
  "location": "LoginSteps.user_enters_Password_as(String)"
});
formatter.result({
  "duration": 581418900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 1362267200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_is_on_Dashboard_Page()"
});
formatter.result({
  "duration": 90244500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_logoff_button()"
});
formatter.result({
  "duration": 1350150200,
  "status": "passed"
});
formatter.after({
  "duration": 1557726800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "User should NOT be able to login with invalid credentials",
  "description": "",
  "id": "login-page;user-should-not-be-able-to-login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User is on landing page as \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User clicks the LoginRegister button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enters Login Name as \"\u003cLoginName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enters Password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User gets a confirmation message",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User is still in login page as \"\u003cText_Dispalyed\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "login-page;user-should-not-be-able-to-login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "url",
        "LoginName",
        "Password",
        "Text_Dispalyed"
      ],
      "line": 27,
      "id": "login-page;user-should-not-be-able-to-login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "https://automationteststore.com",
        "datastudioplaceWrong",
        "Manchester1",
        "RETURNING CUSTOMER"
      ],
      "line": 28,
      "id": "login-page;user-should-not-be-able-to-login-with-invalid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6048988000,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User should NOT be able to login with invalid credentials",
  "description": "",
  "id": "login-page;user-should-not-be-able-to-login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User is on landing page as \"https://automationteststore.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User clicks the LoginRegister button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enters Login Name as \"datastudioplaceWrong\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enters Password as \"Manchester1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User gets a confirmation message",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User is still in login page as \"RETURNING CUSTOMER\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://automationteststore.com",
      "offset": 28
    }
  ],
  "location": "LoginSteps.user_is_on_landing_page_as(String)"
});
formatter.result({
  "duration": 3025480400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_the_LoginRegister_button()"
});
formatter.result({
  "duration": 1953789800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "datastudioplaceWrong",
      "offset": 27
    }
  ],
  "location": "LoginSteps.user_enters_Login_Name_as(String)"
});
formatter.result({
  "duration": 848682300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manchester1",
      "offset": 25
    }
  ],
  "location": "LoginSteps.user_enters_Password_as(String)"
});
formatter.result({
  "duration": 609356800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 1121134500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_gets_a_confirmation_message()"
});
formatter.result({
  "duration": 315784500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RETURNING CUSTOMER",
      "offset": 32
    }
  ],
  "location": "LoginSteps.user_is_still_in_login_page_as(String)"
});
formatter.result({
  "duration": 106092000,
  "status": "passed"
});
formatter.after({
  "duration": 1663461300,
  "status": "passed"
});
formatter.uri("Login_Negative.feature");
formatter.feature({
  "line": 2,
  "name": "Login Page: User Unsuccessful attempts",
  "description": "",
  "id": "login-page:-user-unsuccessful-attempts",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginUnsuccessful"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should NOT be able to login with invalid credentials",
  "description": "",
  "id": "login-page:-user-unsuccessful-attempts;user-should-not-be-able-to-login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on landing page as \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks the LoginRegister button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters Login Name as \"\u003cLoginName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters Password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User gets a confirmation message",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User is still in login page as \"\u003cText_Dispalyed\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login-page:-user-unsuccessful-attempts;user-should-not-be-able-to-login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "url",
        "LoginName",
        "Password",
        "Text_Dispalyed"
      ],
      "line": 14,
      "id": "login-page:-user-unsuccessful-attempts;user-should-not-be-able-to-login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "https://automationteststore.com",
        "datastudioplaceWrong",
        "Manchester1",
        "RETURNING CUSTOMER"
      ],
      "line": 15,
      "id": "login-page:-user-unsuccessful-attempts;user-should-not-be-able-to-login-with-invalid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3432188100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should NOT be able to login with invalid credentials",
  "description": "",
  "id": "login-page:-user-unsuccessful-attempts;user-should-not-be-able-to-login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginUnsuccessful"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on landing page as \"https://automationteststore.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks the LoginRegister button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters Login Name as \"datastudioplaceWrong\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters Password as \"Manchester1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User gets a confirmation message",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User is still in login page as \"RETURNING CUSTOMER\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://automationteststore.com",
      "offset": 28
    }
  ],
  "location": "LoginSteps.user_is_on_landing_page_as(String)"
});
formatter.result({
  "duration": 3508121300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_the_LoginRegister_button()"
});
formatter.result({
  "duration": 2541406900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "datastudioplaceWrong",
      "offset": 27
    }
  ],
  "location": "LoginSteps.user_enters_Login_Name_as(String)"
});
formatter.result({
  "duration": 813362500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manchester1",
      "offset": 25
    }
  ],
  "location": "LoginSteps.user_enters_Password_as(String)"
});
formatter.result({
  "duration": 843869200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 1150965100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_gets_a_confirmation_message()"
});
formatter.result({
  "duration": 385957200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RETURNING CUSTOMER",
      "offset": 32
    }
  ],
  "location": "LoginSteps.user_is_still_in_login_page_as(String)"
});
formatter.result({
  "duration": 87871800,
  "status": "passed"
});
formatter.after({
  "duration": 1420218100,
  "status": "passed"
});
formatter.uri("Login_Positive.feature");
formatter.feature({
  "line": 1,
  "name": "Login Page",
  "description": "",
  "id": "login-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "login-page;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Validcredentials"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on landing page as \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks the LoginRegister button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters Login Name as \"\u003cLoginName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters Password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User is on Dashboard Page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks logoff button",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login-page;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "url",
        "LoginName",
        "Password"
      ],
      "line": 14,
      "id": "login-page;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "https://automationteststore.com",
        "datastudioplace",
        "Manchester1"
      ],
      "line": 15,
      "id": "login-page;user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3598762600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "login-page;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Validcredentials"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on landing page as \"https://automationteststore.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks the LoginRegister button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters Login Name as \"datastudioplace\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters Password as \"Manchester1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User is on Dashboard Page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks logoff button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://automationteststore.com",
      "offset": 28
    }
  ],
  "location": "LoginSteps.user_is_on_landing_page_as(String)"
});
formatter.result({
  "duration": 4109934600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_the_LoginRegister_button()"
});
formatter.result({
  "duration": 1388092700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "datastudioplace",
      "offset": 27
    }
  ],
  "location": "LoginSteps.user_enters_Login_Name_as(String)"
});
formatter.result({
  "duration": 605571200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manchester1",
      "offset": 25
    }
  ],
  "location": "LoginSteps.user_enters_Password_as(String)"
});
formatter.result({
  "duration": 568442300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 1146787100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_is_on_Dashboard_Page()"
});
formatter.result({
  "duration": 96199500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_logoff_button()"
});
formatter.result({
  "duration": 1323306300,
  "status": "passed"
});
formatter.after({
  "duration": 1729756500,
  "status": "passed"
});
});