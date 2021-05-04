//Page object model for Check Out Page

module.exports = {

    //Asserts that the bag has 1 item and clicks checkout
    assertBagAndProceedToCart: () => {
        cy.get("[class='minibag_desktop___BvbwH fullBag']").trigger('mouseover').contains('1 Item')
        cy.get('Button').contains('GO TO BAG & CHECKOUT').click({force: true})
    },

    //awaits API which updates page with items, before clicking checkout
    proceedToCheckOutPage:()=>{
        cy.intercept('/apiproxy/api/cms/content/sites/www.kurtgeiger.com/groups/kg-siteswitcher').as ('checkoutButton')
        cy.wait("@checkoutButton")
        cy.get("[class='action primary checkout']").click()

    },

    //Asserts checkout page URL is correct
    assertCheckOutPageUrl:()=>{
        cy.url().should('eq', 'https://secure.kurtgeiger.com/checkout/')
    }
}