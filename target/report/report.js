$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/EditProfile.feature");
formatter.feature({
  "line": 2,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Edit"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User want to edit Profile in QASIR web application",
  "description": "",
  "id": "login-feature;user-want-to-edit-profile-in-qasir-web-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@edit"
    },
    {
      "line": 4,
      "name": "@success"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user open google web",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user want to check the web",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click email title",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click email field",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user input \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click field pin",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user input the \"\u003cpin\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user login to dashboard QASIR",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user have to choose menu outlet",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click edit button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user input field \"\u003cnama\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user also input field \"\u003calamat\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user click button SIMPAN",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "login-feature;user-want-to-edit-profile-in-qasir-web-application;",
  "rows": [
    {
      "cells": [
        "email",
        "pin",
        "nama",
        "alamat",
        "kelurahan"
      ],
      "line": 22,
      "id": "login-feature;user-want-to-edit-profile-in-qasir-web-application;;1"
    },
    {
      "cells": [
        "harianjarichad99@gmail.com",
        "121296",
        "nama test",
        "alamat test",
        "tanjung duren"
      ],
      "line": 23,
      "id": "login-feature;user-want-to-edit-profile-in-qasir-web-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3934824500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User want to edit Profile in QASIR web application",
  "description": "",
  "id": "login-feature;user-want-to-edit-profile-in-qasir-web-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@success"
    },
    {
      "line": 1,
      "name": "@Edit"
    },
    {
      "line": 4,
      "name": "@edit"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user open google web",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user want to check the web",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click email title",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click email field",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user input \"harianjarichad99@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click field pin",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user input the \"121296\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user login to dashboard QASIR",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user have to choose menu outlet",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click edit button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user input field \"nama test\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user also input field \"alamat test\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user click button SIMPAN",
  "keyword": "Then "
});
formatter.match({
  "location": "OpenWebStep.userOpenGoogleWeb()"
});
formatter.result({
  "duration": 3444840792,
  "status": "passed"
});
formatter.match({
  "location": "OpenWebStep.userCheckLogo()"
});
formatter.result({
  "duration": 270504667,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickMenuEmail()"
});
formatter.result({
  "duration": 780981125,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickEmailField()"
});
formatter.result({
  "duration": 196140250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "harianjarichad99@gmail.com",
      "offset": 12
    }
  ],
  "location": "LoginStep.userInputEmail(String)"
});
formatter.result({
  "duration": 131909209,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickPinField()"
});
formatter.result({
  "duration": 153107875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "121296",
      "offset": 16
    }
  ],
  "location": "LoginStep.userInputPin(String)"
});
formatter.result({
  "duration": 75918625,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.assertDashboard()"
});
formatter.result({
  "duration": 18231187292,
  "status": "passed"
});
formatter.match({
  "location": "EditProfileStep.userClickIconOutlet()"
});
formatter.result({
  "duration": 6148995209,
  "status": "passed"
});
formatter.match({
  "location": "EditProfileStep.userClickEmailField()"
});
formatter.result({
  "duration": 5750483792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nama test",
      "offset": 18
    }
  ],
  "location": "EditProfileStep.userInputName(String)"
});
formatter.result({
  "duration": 111494250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alamat test",
      "offset": 23
    }
  ],
  "location": "EditProfileStep.userInputAlamat(String)"
});
formatter.result({
  "duration": 81240875,
  "status": "passed"
});
formatter.match({
  "location": "EditProfileStep.userClickSimpan()"
});
formatter.result({
  "duration": 16748014250,
  "status": "passed"
});
formatter.after({
  "duration": 184379791,
  "status": "passed"
});
});