Feature: Hotel Booking In Adactin Application

@Adactin1
Scenario Outline: Login Page
Given user Launch The Application
When user Enter The "<username>" In User Name Field
And user Enter The "<password>" In Password Field
Then user Click On The Login Button And It Navigates To Search Hotel Page
Examples:
|username|password|
|AltrinMohan|K9ZC09|

@Adactin2
Scenario: Search Hotel Page
When user Select The Hotel Location
And user Select The Hotel Name
And user Select The Room Type
And user Select The Number Of Rooms
And user Select The Check In Date
And user Select The Check Out Date
And user Select The Adults Per Room
And user Select The Children Per Room
Then user Click On The Search Button And Its Navigate To Select Hotel Page

@Adactin3
Scenario: Select Hotel Page
When user Select The Hotel Hervey
Then user Click On The Continue Button And Its Navigate To Book A Hotel Page

@Adactin4
Scenario: Book A Hotel Page
When user Enter The "Altrin" In First Name Field
And user Enter The "Mohan" In Last Name Field
And user Enter The "(323) 451-3099, 1032 W 91st St, Los Angeles, California(CA), 90044" In Billing Address Field
And user Enter The "1234567891234567" In Credit Card Number Field
And user Select The Card Type
And user Select The Expiry Month
And user Select The Expiry Year
And user Enter The "123" In CVV Number Field
Then user Click On The Book Now Button And Its Navigate To Booking Confirmation Page

@Adactin5
Scenario: Booking Confirmation Page
Then user Click On The My Itinerary Button And Its Navigate To Booked Itinerary Page

@Adactin6
Scenario: Booked Itinerary Page
Then user Click On The Logout Button And Its Navigate To You Have Successfully Logged Out Page










