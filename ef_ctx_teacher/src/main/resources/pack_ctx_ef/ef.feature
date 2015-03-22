Feature: EF's CTX

In order to know experience of Classroom technology experience


Scenario: As a Teacher able to Login to the application

Given I open NearPod "loginURL" on "Chrome"
And I click on "loginbutton"
And login with teacher "username" as "user"
And login with teacher "password" as "pass"
And I click on "signin"
Then user should logged in "results"
