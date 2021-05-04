//Page object model for Home Page


module.exports = {

    //navigates to home page, waits for cookie policy
    navigate: () => {
        cy.intercept('apiproxy/api/cms/content/sites/www.kurtgeiger.com/blocks/kg-cookie-policy-update').as('closeWelcome')
        cy.visit('/')
        cy.wait("@closeWelcome")
    },

    //waits for api which controls cookie policy, before clicking accept and moving on.
    //Example of reuse: 'Given I select men category from the header' is used in both scenarios,
    //This conditional checks if the URL is already www.kurtgeiger.com, and if not navigates there, waits for cookies and accepts them.
    closeBanners:()=> {

        cy.url().then((url) => {
            if (url.includes('https://www.kurtgeiger.com/')) {
                cy.get("[class='CloseMenu___20Ih8']").click()
                cy.get('Button').contains('I accept').click()
            }
            else{
                cy.intercept('apiproxy/api/cms/content/sites/www.kurtgeiger.com/blocks/kg-cookie-policy-update').as('closeWelcome')
                cy.visit('/')
                cy.get("[class='CloseMenu___20Ih8']").click()
                cy.get('Button').contains('I accept').click()
                cy.wait("@closeWelcome")
            }
        })
    },

    //Hovers over the 'Mens' category
    showMensShoesHover: () => {

        cy.get("[class='nav-item-link___1CNeA']").find("span").contains('Men').trigger('mouseover')
    },

    //asserts that all the subcategories of mens shoes are visible in the dropdown
    checkListofProducts:()=>{
        cy.get("[href='/men/shoes/trainers'").should('be.visible')
        cy.get("[href='/men/shoes/loafers'").should('be.visible')
        cy.get("[href='/men/shoes/formal'").should('be.visible')
        cy.get("[href='/men/shoes/casuals'").should('be.visible')
    },

    //selects boots category from the drop down
    selectCategory:()=>{
        cy.get("[href='/men/shoes/boots'").should('be.visible').click()
    },

    //navigates to the Mens main PDP page
    navigateToMensShoesPdp: () => {
        cy.get("[class='nav-item-link___1CNeA']").find("span").contains('Men').click();
    }


}