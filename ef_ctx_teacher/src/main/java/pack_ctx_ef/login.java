package pack_ctx_ef;

import org.junit.Assert;

import pack_ctx_ef_util.ctx_connector;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

/**
 * Hello world!
 *
 */
public class login 
{
	
	ctx_connector eductionfirst = new ctx_connector();
	
	@Given("^I open NearPod \"([^\"]*)\" on \"([^\"]*)\"$")
	public void I_open_nearpord(String URL, String browser)
	{
		System.out.println("I open NearPod "+ URL +" on "+browser);
		eductionfirst.openBrowser(browser);
		eductionfirst.navigate(URL);
	}
	@And("^I click on \"([^\"]*)\"$")
	public void I_click_login(String object){
		System.out.println("I click on "+object);
		eductionfirst.click(object);
	}
	
	@And("^login with teacher \"([^\"]*)\" as \"([^\"]*)\"$")
	public void login_with(String username, String object){
		System.out.println("Login with teacer "+username+ " as "+object);
		eductionfirst.user_details(username, object);
	}
	@Then("^user should logged in \"([^\"]*)\"$")
	public void user_logged_successfully(String expectedresult){
		System.out.println("user should logged in"+ expectedresult);
		boolean result = eductionfirst.isElementPresent(expectedresult);
		String actualResult = null;
		
		if(result){
			actualResult = "success";
		}
		else 
			actualResult = "failure";
		
		Assert.assertEquals(expectedresult, actualResult);

}
	
}
