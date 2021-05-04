//imports cypress cucumber preprocessor, will read relevant feature files to retrieve steps
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
//imports page object files, so relevant methods can be called
const MensShoesPage = require("../../page_objects/mensShoesPage");
const CheckOutPage = require("../../page_objects/checkOutPage")
const HomePage = require("../../page_objects/homePage")

//All steps use functions defined in page object files, this allows for greater re-use and easier maintenance of scripts
Given('I am on PDP', ()=> {
    HomePage.navigateToMensShoesPdp()
});

When('I select any colour and size for the chosen men category',  ()=> {
     MensShoesPage.selectMensShoesFilters()
});

When('I add the product to the bag', ()=> {
    MensShoesPage.addShoesToBag()
});

Then('I can see the bag with single item',  ()=> {
    CheckOutPage.assertBagAndProceedToCart()
});

Then('I click Proceed to Checkout', ()=> {
    CheckOutPage.proceedToCheckOutPage()
});

Then('I should be on checkout page',  ()=>{
    CheckOutPage.assertCheckOutPageUrl()
});