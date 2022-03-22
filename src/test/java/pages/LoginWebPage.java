package pages;

import org.awaitility.Awaitility;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.Keys;

import java.util.concurrent.TimeUnit;

public class LoginWebPage {
  @FindBy(xpath = ".//*[contains(text(), 'Email')]")
  private WebElement email;

  @FindBy(xpath = ".//*[contains(@id, 'sign-in-email')]")
  private WebElement emailInput;

  @FindBy(xpath = ".//*[contains(@id, 'password')]")
  private WebElement pin;

  @FindBy(xpath = ".//*[contains(@id, 'submit-btn-signin')]")
  private WebElement loginButton;

  @FindBy(xpath = ".//*[@alt='Logo']" )
  private WebElement logo;

  public static WebDriver browser;

  public LoginWebPage(WebDriver browser) {
    this.browser = browser;
    PageFactory.initElements(browser, this);
  }

  public void clickMenuEmail() {
    email.click();
    Awaitility.await().atMost(5, TimeUnit.SECONDS);
  }

  public void clickEmailField() {
    emailInput.click();
    Awaitility.await().atMost(5, TimeUnit.SECONDS);
  }

  public void inputEmailField(String email) {
    emailInput.sendKeys(email);
    Awaitility.await().atMost(5, TimeUnit.SECONDS);
  }

  public void clickPinField() {
    pin.click();
    Awaitility.await().atMost(5, TimeUnit.SECONDS);
  }

  public void inputPinField(String pass) {
    pin.sendKeys(pass);
    Awaitility.await().atMost(5, TimeUnit.SECONDS);
  }

  public void loginButton() throws InterruptedException {
    Thread.sleep(4000);
    loginButton.sendKeys(Keys.RETURN);
  }

  public void checkLogo() throws InterruptedException {
    logo.isDisplayed();
    Thread.sleep(4000);
  }
}
