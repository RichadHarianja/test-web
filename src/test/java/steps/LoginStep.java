package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.LoginWebPage;

import static setups.BrowserPool.getBrowserInstance;

public class LoginStep {
  LoginWebPage loginWebPage = new LoginWebPage(getBrowserInstance());

  @Then("^user click email title$")
  public void userClickMenuEmail() {
    loginWebPage.clickMenuEmail();
  }

  @Then("^user click email field$")
  public void userClickEmailField() {
    loginWebPage.clickEmailField();
  }

  @And("^user input \"([^\"]*)\"$")
  public void userInputEmail(String email) {
    loginWebPage.inputEmailField(email);
  }

  @Then("^user click field pin$")
  public void userClickPinField() {
    loginWebPage.clickPinField();
  }

  @When("^user input the \"([^\"]*)\"$")
  public void userInputPin(String pin) {
    loginWebPage.inputPinField(pin);
  }

  @Then("^user login to dashboard QASIR$")
  public void assertDashboard() throws InterruptedException {
    loginWebPage.loginButton();
    Thread.sleep(5000);
    loginWebPage.checkLogo();
    Thread.sleep(5000);
  }

}
