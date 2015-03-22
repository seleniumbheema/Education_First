package pack_ctx_ef_util;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.firefox.internal.ProfilesIni;

import com.sun.org.apache.regexp.internal.recompile;

public class ctx_connector {

	
	
	
	Properties OR = null;
	Properties CONFIG = null;
	WebDriver driver = null;

	
	public ctx_connector()
	{
			if(OR==null){
				try{
				
					OR = new Properties();
					FileInputStream fs = new FileInputStream(System.getProperty("user.dir")+ "\\src\\main\\java\\pack_ctx_ef_config\\OR.properties");
					OR.load(fs);
					System.out.println(OR.getProperty("env"));
					CONFIG = new Properties();
					fs = new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\pack_ctx_ef_config\\"+OR.getProperty("env")+"_config.properties");
					CONFIG.load(fs);
					System.out.println(CONFIG.getProperty("loginURL"));
				}
				catch(Exception e)
				{
					System.out.println("error in intializing the properties file");
				}
				
		}
	}
	
	//--------------@@@   Application dependent functions @@@--------------
	public void openBrowser(String browsertype)
	{
		if(browsertype.equals("Mozilla"))
		{
		ProfilesIni allprofiles = new ProfilesIni();
		FirefoxProfile myprof = allprofiles.getProfile("bheema");
		driver = new FirefoxDriver(myprof);
		}
		else if (browsertype.equals("Chrome")) 
		{
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\chromedriver\\chromedriver.exe");
			driver = new ChromeDriver();
		}
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
	}
	
	public void navigate(String loginURL)
	{
		driver.get(CONFIG.getProperty(loginURL));
	}
	
	public void click(String object){
		driver.findElement(By.xpath(CONFIG.getProperty(object))).click();;
	}
	
	public void user_details(String object, String text)
	{
		driver.findElement(By.id(CONFIG.getProperty(object))).sendKeys(CONFIG.getProperty(text));
	}
	
	public boolean isElementPresent(String object)
	{
	String title = driver.getTitle();
	if(!title.equals("Nearpod Lessons: Download ready-to-use content for education"))
		return false;
	else
		return true;
	}

}
