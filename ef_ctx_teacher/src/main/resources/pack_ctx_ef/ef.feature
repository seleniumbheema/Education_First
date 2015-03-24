Feature: EF's CTX

In order to know experience of Classroom technology experience


Scenario Outline: As a Teacher able to Login to the application

Given I open NearPod "loginURL" on "<browser>"
And I click on "loginbutton"
And login with teacher "username" as "<usernametext>"
And login with teacher "password" as "<passwordtext>"
And I click on "signin"
Then user should logged in "results"



Examples:

| browser | usernametext 		  | passwordtext |
| Chrome  | anil.bheema@gmail.com | needtochange |
| Mozilla | usernametext		  | passwordtext |
