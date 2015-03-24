$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("pack_ctx_ef\\ef.feature");
formatter.feature({
  "line": 1,
  "name": "EF\u0027s CTX",
  "description": "\r\nIn order to know experience of Classroom technology experience",
  "id": "ef\u0027s-ctx",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 20,
  "name": "As a Teacher able to Login to the application",
  "description": "",
  "id": "ef\u0027s-ctx;as-a-teacher-able-to-login-to-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I open NearPod \"loginURL\" on \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on \"loginbutton\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "login with teacher \"username\" as \"anil.bheema@gmail.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "login with teacher \"password\" as \"needtochange\"",
  "matchedColumns": [
    2
  ],
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
  "duration": 16165574592,
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
  "duration": 2315375776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 20
    },
    {
      "val": "anil.bheema@gmail.com",
      "offset": 34
    }
  ],
  "location": "login.login_with(String,String)"
});
formatter.result({
  "duration": 355673402,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 20
    },
    {
      "val": "needtochange",
      "offset": 34
    }
  ],
  "location": "login.login_with(String,String)"
});
formatter.result({
  "duration": 148512722,
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
  "duration": 350203355,
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
  "duration": 43054952,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[results]\u003e but was:\u003c[failure]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat pack_ctx_ef.login.user_logged_successfully(login.java:49)\r\n\tat ✽.Then user should logged in \"results\"(pack_ctx_ef\\ef.feature:13)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 21,
  "name": "As a Teacher able to Login to the application",
  "description": "",
  "id": "ef\u0027s-ctx;as-a-teacher-able-to-login-to-the-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I open NearPod \"loginURL\" on \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on \"loginbutton\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "login with teacher \"username\" as \"usernametext\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "login with teacher \"password\" as \"passwordtext\"",
  "matchedColumns": [
    2
  ],
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
  "duration": 17319492225,
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
  "duration": 2319186294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 20
    },
    {
      "val": "usernametext",
      "offset": 34
    }
  ],
  "location": "login.login_with(String,String)"
});
formatter.result({
  "duration": 208487039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 20
    },
    {
      "val": "passwordtext",
      "offset": 34
    }
  ],
  "location": "login.login_with(String,String)"
});
formatter.result({
  "duration": 159642688,
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
  "duration": 283051304,
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
  "duration": 112747217,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[results]\u003e but was:\u003c[failure]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat pack_ctx_ef.login.user_logged_successfully(login.java:49)\r\n\tat ✽.Then user should logged in \"results\"(pack_ctx_ef\\ef.feature:13)\r\n",
  "status": "failed"
});
});