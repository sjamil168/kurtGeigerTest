module.exports = {

    assertBagAndProceedToCart: () => {
        cy.get("[class='minibag_desktop___BvbwH fullBag']").trigger('mouseover').contains('1 Item')
        cy.get('Button').contains('GO TO BAG & CHECKOUT').click({force: true})
    },

    proceedToCheckOutPage:()=>{
        cy.intercept('/apiproxy/api/cms/content/sites/www.kurtgeiger.com/groups/kg-siteswitcher').as ('checkoutButton')
        cy.wait("@checkoutButton")
        cy.get("[class='action primary checkout']").click()

    },

    assertCheckOutPageUrl:()=>{
        cy.url().should('eq', 'https://secure.kurtgeiger.com/checkout/')
    }
}