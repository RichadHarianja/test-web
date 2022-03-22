package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class EditProfileWebPage {

  @FindBy(xpath = ".//*[contains(@name, 'outlet_name')]")
  private WebElement namaField;

  @FindBy(xpath = ".//*[contains(@name, 'outlet_address')]")
  private WebElement alamatField;

  @FindBy(xpath = ".//*[contains(@id, 'submit_form')]")
  private WebElement simpanButton;

  public static WebDriver browser;

  public EditProfileWebPage(WebDriver browser) {
    this.browser = browser;
    PageFactory.initElements(browser, this);
  }

  public void inputNama(String nama) {
    namaField.sendKeys(nama);
  }

  public void inputAlamat(String alamat) {
    alamatField.sendKeys(alamat);
  }

  public void clickSimpan() throws InterruptedException {
    Thread.sleep(5000);
    simpanButton.click();
    Thread.sleep(5000);
  }
}
