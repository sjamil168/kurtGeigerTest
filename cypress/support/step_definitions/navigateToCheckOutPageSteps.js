import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
const MensShoesPage = require("../../page_objects/mensShoesPage");
const CheckOutPage = require("../../page_objects/checkOutPage")

beforeEach(() =>{
    cy.visit('/')

})
Given('I am on PDP', ()=> {

    cy.get("[class='nav-item-link___1CNeA']").find("span").contains('Men').click();

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