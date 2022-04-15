package com.step.definition;

import java.io.File;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import com.hotelbookingbaseclass.BaseClass;
import com.pageobjectmanager.PageObjectManager;
import com.test.runner.TestRunner;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition extends BaseClass{
	public static WebDriver driver = TestRunner.driver;
	public static PageObjectManager pom = new PageObjectManager(driver);

	@Before
	public static void beforeHooks(Scenario s) {
		System.out.println("Scenario Name : "+s.getName());
	}
	
	@After
	public static void afterHooks(Scenario s) throws Throwable {
		if (s.isFailed()) {
			TakesScreenshot d=(TakesScreenshot) driver;
			File e = d.getScreenshotAs(OutputType.FILE);
			File destination = new File("C:\\Users\\altri\\eclipse-workspace\\cucumberAdactinHotelBooking\\ScreenShort\\pic.png");
			FileUtils.copyFile(e, destination);
		}
		System.out.println("Scenario Status : "+s.getStatus());
	}
	
	@Given("^user Launch The Application$")
	public void user_Launch_The_Application() throws Throwable {
		getUrl("https://adactinhotelapp.com/");
	}

	@When("^user Enter The \"([^\"]*)\" In User Name Field$")
	public void user_Enter_The_In_User_Name_Field(String username) throws Throwable {
		inputValueElement(pom.getLP().getUsername(),username);
	}

	@When("^user Enter The \"([^\"]*)\" In Password Field$")
	public void user_Enter_The_In_Password_Field(String password) throws Throwable {
		inputValueElement(pom.getLP().getPassword(),password);
	}

	@Then("^user Click On The Login Button And It Navigates To Search Hotel Page$")
	public void user_Click_On_The_Login_Button_And_It_Navigates_To_Search_Hotel_Page() throws Throwable {
		clickOnElement(pom.getLP().getLogin());
	}

	@When("^user Select The Hotel Location$")
	public void user_Select_The_Hotel_Location() throws Throwable {
		clickOnElement(pom.getSHP().getLocation());
	}

	@When("^user Select The Hotel Name$")
	public void user_Select_The_Hotel_Name() throws Throwable {
		clickOnElement(pom.getSHP().getHotelName());
	}

	@When("^user Select The Room Type$")
	public void user_Select_The_Room_Type() throws Throwable {
		clickOnElement(pom.getSHP().getRoomType());
	}

	@When("^user Select The Number Of Rooms$")
	public void user_Select_The_Number_Of_Rooms() throws Throwable {
		clickOnElement(pom.getSHP().getRooms());
	}

	@When("^user Select The Check In Date$")
	public void user_Select_The_Check_In_Date() throws Throwable {
		clickOnElement(pom.getSHP().getCheckIn());
	}

	@When("^user Select The Check Out Date$")
	public void user_Select_The_Check_Out_Date() throws Throwable {
		clickOnElement(pom.getSHP().getCheckOut());
	}

	@When("^user Select The Adults Per Room$")
	public void user_Select_The_Adults_Per_Room() throws Throwable {
		clickOnElement(pom.getSHP().getAdultRoom());
	}

	@When("^user Select The Children Per Room$")
	public void user_Select_The_Children_Per_Room() throws Throwable {
		clickOnElement(pom.getSHP().getChildrenRoom());
	}

	@Then("^user Click On The Search Button And Its Navigate To Select Hotel Page$")
	public void user_Click_On_The_Search_Button_And_Its_Navigate_To_Select_Hotel_Page() throws Throwable {
		clickOnElement(pom.getSHP().getSubmit());
	}

	@When("^user Select The Hotel Hervey$")
	public void user_Select_The_Hotel_Hervey() throws Throwable {
		clickOnElement(pom.getSP().getClick());
	}

	@Then("^user Click On The Continue Button And Its Navigate To Book A Hotel Page$")
	public void user_Click_On_The_Continue_Button_And_Its_Navigate_To_Book_A_Hotel_Page() throws Throwable {
		clickOnElement(pom.getSP().getContinue1());
	}

	@When("^user Enter The \"([^\"]*)\" In First Name Field$")
	public void user_Enter_The_In_First_Name_Field(String firstName) throws Throwable {
		inputValueElement(pom.getBHP().getFirstName(),firstName);
	}

	@When("^user Enter The \"([^\"]*)\" In Last Name Field$")
	public void user_Enter_The_In_Last_Name_Field(String lastName) throws Throwable {
		inputValueElement(pom.getBHP().getLastName(),lastName);
	}

	@When("^user Enter The \"([^\"]*)\" In Billing Address Field$")
	public void user_Enter_The_In_Billing_Address_Field(String billingAddress) throws Throwable {
		inputValueElement(pom.getBHP().getAddress(),billingAddress);
	}

	@When("^user Enter The \"([^\"]*)\" In Credit Card Number Field$")
	public void user_Enter_The_In_Credit_Card_Number_Field(String ccNumber) throws Throwable {
		inputValueElement(pom.getBHP().getCcNumber(),ccNumber);
	}

	@When("^user Select The Card Type$")
	public void user_Select_The_Card_Type() throws Throwable {
		clickOnElement(pom.getBHP().getCardType());
	}

	@When("^user Select The Expiry Month$")
	public void user_Select_The_Expiry_Month() throws Throwable {
		clickOnElement(pom.getBHP().getMonth());
		clickOnElement(pom.getBHP().getExpMonth());
	}

	@When("^user Select The Expiry Year$")
	public void user_Select_The_Expiry_Year() throws Throwable {
		clickOnElement(pom.getBHP().getYear());
		clickOnElement(pom.getBHP().getExpYear());
	}

	@When("^user Enter The \"([^\"]*)\" In CVV Number Field$")
	public void user_Enter_The_In_CVV_Number_Field(String cvv) throws Throwable {
		inputValueElement(pom.getBHP().getCvv(),cvv);
	}

	@Then("^user Click On The Book Now Button And Its Navigate To Booking Confirmation Page$")
	public void user_Click_On_The_Book_Now_Button_And_Its_Navigate_To_Booking_Confirmation_Page() throws Throwable {
		clickOnElement(pom.getBHP().getBookNow());
	}

	@Then("^user Click On The My Itinerary Button And Its Navigate To Booked Itinerary Page$")
	public void user_Click_On_The_My_Itinerary_Button_And_Its_Navigate_To_Booked_Itinerary_Page() throws Throwable {
		clickOnElement(pom.getBIP().getMyItinerary());
	}

	@Then("^user Click On The Logout Button And Its Navigate To You Have Successfully Logged Out Page$")
	public void user_Click_On_The_Logout_Button_And_Its_Navigate_To_You_Have_Successfully_Logged_Out_Page() throws Throwable {
		clickOnElement(pom.getBIP().getLogout());
	}
}
