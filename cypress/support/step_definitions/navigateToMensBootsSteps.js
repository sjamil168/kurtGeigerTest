import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const MensShoesPage = require("../../page_objects/mensShoesPage");

Given('I am on the homepage',  ()=>{
    cy.visit('https://www.kurtgeiger.com/')
});

Given('I select men category from the header', ()=> {
    MensShoesPage.showMensShoesHover()
});

Then('I should see the list of products', ()=> {
    cy.get("[href='/men/shoes/trainers'").should('be.visible')
    cy.get("[href='/men/shoes/loafers'").should('be.visible')
    cy.get("[href='/men/shoes/formal'").should('be.visible')
    cy.get("[href='/men/shoes/casuals'").should('be.visible')
});

When('I select boots category', () => {
    cy.get("[href='/men/shoes/boots'").should('be.visible').click()

});
Then('I should see only boots', ()=> {
    cy.url().should('eq', 'https://www.kurtgeiger.com/men/shoes/boots')
    cy.contains('Men\'s Boots')

});