package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import pages.EditProfileWebPage;

import static setups.BrowserPool.getBrowserInstance;

public class EditProfileStep {
  EditProfileWebPage editProfileWebPage = new EditProfileWebPage(getBrowserInstance());

  @And("^user have to choose menu outlet$")
  public void userClickIconOutlet() throws InterruptedException {
    getBrowserInstance().navigate().to("https://testing-680549.qasir.id/outlets");
    Thread.sleep(5000);
  }

  @Then("^user click edit button$")
  public void userClickEmailField() throws InterruptedException {
    getBrowserInstance().navigate().to("https://testing-680549.qasir.id/outlets/form/710854");
    Thread.sleep(5000);
  }

  @Then("^user input field \"([^\"]*)\"$")
  public void userInputName(String nama) {
    editProfileWebPage.inputNama(nama);
  }

  @Then("^user also input field \"([^\"]*)\"$")
  public void userInputAlamat(String alamat) {
    editProfileWebPage.inputAlamat(alamat);
  }

  @Then("^user click button SIMPAN$")
  public void userClickSimpan() throws InterruptedException {
    editProfileWebPage.clickSimpan();
    Thread.sleep(5000);
  }

}
