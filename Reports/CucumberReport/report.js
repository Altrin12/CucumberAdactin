$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/adactinfeature/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Adactin1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"\u003cusername\u003e\" In User Name Field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"\u003cpassword\u003e\" In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click On The Login Button And It Navigates To Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "hotel-booking-in-adactin-application;login-page;;1"
    },
    {
      "cells": [
        "AltrinMohan",
        "K9ZC09"
      ],
      "line": 11,
      "id": "hotel-booking-in-adactin-application;login-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1474400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Adactin1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"AltrinMohan\" In User Name Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"K9ZC09\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click On The Login Button And It Navigates To Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 85419130600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AltrinMohan",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_User_Name_Field(String)"
});
formatter.result({
  "duration": 119190500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "K9ZC09",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 70264700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_On_The_Login_Button_And_It_Navigates_To_Search_Hotel_Page()"
});
formatter.result({
  "duration": 2864229000,
  "status": "passed"
});
formatter.after({
  "duration": 119100,
  "status": "passed"
});
formatter.before({
  "duration": 80200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Search Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;search-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Adactin2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user Select The Hotel Location",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user Select The Hotel Name",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Select The Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Select The Number Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user Select The Check In Date",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user Select The Check Out Date",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user Select The Adults Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Select The Children Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user Click On The Search Button And Its Navigate To Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Hotel_Location()"
});
formatter.result({
  "duration": 45872300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Hotel_Name()"
});
formatter.result({
  "duration": 39510800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Room_Type()"
});
formatter.result({
  "duration": 34965100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Number_Of_Rooms()"
});
formatter.result({
  "duration": 35615800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Check_In_Date()"
});
formatter.result({
  "duration": 63044300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Check_Out_Date()"
});
formatter.result({
  "duration": 56472100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Adults_Per_Room()"
});
formatter.result({
  "duration": 40885400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Children_Per_Room()"
});
formatter.result({
  "duration": 31925100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_On_The_Search_Button_And_Its_Navigate_To_Select_Hotel_Page()"
});
formatter.result({
  "duration": 1422193200,
  "status": "passed"
});
formatter.after({
  "duration": 59700,
  "status": "passed"
});
formatter.before({
  "duration": 108600,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Select Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;select-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@Adactin3"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "user Select The Hotel Hervey",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user Click On The Continue Button And Its Navigate To Book A Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Hotel_Hervey()"
});
formatter.result({
  "duration": 64037700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_On_The_Continue_Button_And_Its_Navigate_To_Book_A_Hotel_Page()"
});
formatter.result({
  "duration": 1275862300,
  "status": "passed"
});
formatter.after({
  "duration": 62300,
  "status": "passed"
});
formatter.before({
  "duration": 82100,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Book A Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;book-a-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@Adactin4"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "user Enter The \"Altrin\" In First Name Field",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user Enter The \"Mohan\" In Last Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user Enter The \"(323) 451-3099, 1032 W 91st St, Los Angeles, California(CA), 90044\" In Billing Address Field",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user Enter The \"1234567891234567\" In Credit Card Number Field",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Select The Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Select The Expiry Month",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user Select The Expiry Year",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user Enter The \"123\" In CVV Number Field",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user Click On The Book Now Button And Its Navigate To Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Altrin",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_First_Name_Field(String)"
});
formatter.result({
  "duration": 87778800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mohan",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_Last_Name_Field(String)"
});
formatter.result({
  "duration": 67053500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(323) 451-3099, 1032 W 91st St, Los Angeles, California(CA), 90044",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_Billing_Address_Field(String)"
});
formatter.result({
  "duration": 117538200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567891234567",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_Credit_Card_Number_Field(String)"
});
formatter.result({
  "duration": 79929400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Card_Type()"
});
formatter.result({
  "duration": 38729800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Expiry_Month()"
});
formatter.result({
  "duration": 114076000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Expiry_Year()"
});
formatter.result({
  "duration": 102842200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_CVV_Number_Field(String)"
});
formatter.result({
  "duration": 66880400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_On_The_Book_Now_Button_And_Its_Navigate_To_Booking_Confirmation_Page()"
});
formatter.result({
  "duration": 60534500,
  "status": "passed"
});
formatter.after({
  "duration": 83900,
  "status": "passed"
});
formatter.before({
  "duration": 64300,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Booking Confirmation Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;booking-confirmation-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@Adactin5"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "user Click On The My Itinerary Button And Its Navigate To Booked Itinerary Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Click_On_The_My_Itinerary_Button_And_Its_Navigate_To_Booked_Itinerary_Page()"
});
formatter.result({
  "duration": 24020000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"my_itinerary\"]\"}\n  (Session info: chrome\u003d100.0.4896.75)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-TKHS2O9\u0027, ip: \u0027192.168.43.39\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [dc0cb52c98a45ff2c2e395750ccab22a, findElement {using\u003dxpath, value\u003d//*[@id\u003d\"my_itinerary\"]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.75, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\altri\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54309}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:54309/devtoo..., se:cdpVersion: 100.0.4896.75, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dc0cb52c98a45ff2c2e395750ccab22a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.hotelbookingbaseclass.BaseClass.clickOnElement(BaseClass.java:37)\r\n\tat com.step.definition.StepDefinition.user_Click_On_The_My_Itinerary_Button_And_Its_Navigate_To_Booked_Itinerary_Page(StepDefinition.java:164)\r\n\tat ✽.Then user Click On The My Itinerary Button And Its Navigate To Booked Itinerary Page(src/test/java/com/adactinfeature/Adactin.feature:44)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 189353900,
  "status": "passed"
});
});