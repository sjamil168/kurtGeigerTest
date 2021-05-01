import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const MensShoesPage = require("../../page_objects/mensShoesPage");

Given('I am on the homepage',  ()=>{
    cy.visit('https://www.kurtgeiger.com/')
});

Given('I select men category from the header', ()=> {
    MensShoesPage.showMensShoesHover()
});

Then('I should see the list of products', ()=> {
    MensShoesPage.checkListofProducts()
});

When('I select boots category', () => {
    MensShoesPage.selectCategory()
});
Then('I should see only boots', ()=> {
    MensShoesPage.assertBootsPage()

});