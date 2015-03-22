$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("pack_ctx_ef\\ef.feature");
formatter.feature({
  "line": 1,
  "name": "EF\u0027s CTX",
  "description": "\r\nIn order to know experience of Classroom technology experience",
  "id": "ef\u0027s-ctx",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "As a Teacher able to Login to the application",
  "description": "",
  "id": "ef\u0027s-ctx;as-a-teacher-able-to-login-to-the-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I open NearPod \"loginURL\" on \"Chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on \"loginbutton\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "login with teacher \"username\" as \"user\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "login with teacher \"password\" as \"pass\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on \"signin\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user should logged in \"results\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "loginURL",
      "offset": 16
    },
    {
      "val": "Chrome",
      "offset": 30
    }
  ],
  "location": "login.I_open_nearpord(String,String)"
});
formatter.result({
  "duration": 8350260260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginbutton",
      "offset": 12
    }
  ],
  "location": "login.I_click_login(String)"
});
formatter.result({
  "duration": 2757185851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 20
    },
    {
      "val": "user",
      "offset": 34
    }
  ],
  "location": "login.login_with(String,String)"
});
formatter.result({
  "duration": 162290851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 20
    },
    {
      "val": "pass",
      "offset": 34
    }
  ],
  "location": "login.login_with(String,String)"
});
formatter.result({
  "duration": 114424520,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "signin",
      "offset": 12
    }
  ],
  "location": "login.I_click_login(String)"
});
formatter.result({
  "duration": 261770885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "results",
      "offset": 23
    }
  ],
  "location": "login.user_logged_successfully(String)"
});
formatter.result({
  "duration": 10145892,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[results]\u003e but was:\u003c[failure]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat pack_ctx_ef.login.user_logged_successfully(login.java:49)\r\n\tat ✽.Then user should logged in \"results\"(pack_ctx_ef\\ef.feature:13)\r\n",
  "status": "failed"
});
});