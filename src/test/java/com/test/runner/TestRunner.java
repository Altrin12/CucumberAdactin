package com.test.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.hotelbookingbaseclass.BaseClass;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src\\test\\java\\com\\adactinfeature\\Adactin.feature",
		glue = "com.step.definition",
		monochrome = true,
		dryRun = false,
		strict = true,
		tags = ("~@Adactin6"),
		plugin = {"html:Reports/CucumberReport",
				"json:Reports/JsonReport",
				"pretty",
				"com.cucumber.listener.ExtentCucumberFormatter:Report/ExtentReport.html"
		}
		)

public class TestRunner {

	public static WebDriver driver;

	@BeforeClass
	public static void setUp() {
		driver = BaseClass.browserConfiguration("chrome");
	}

	@AfterClass
	public static void tearDown() {
		driver.close();
	}
}
