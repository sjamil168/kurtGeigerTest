//Page object model for Mens Shoes Pages
module.exports = {


    //asserts URL is correctly on the mens boots page, also checks the title of the page
    assertBootsPage:()=>{
        cy.url().should('eq', 'https://www.kurtgeiger.com/men/shoes/boots')
        cy.contains('Men\'s Boots')
    },

    //selects mens shoes filters on the PDP
    selectMensShoesFilters:()=>{
        cy.get('Button').contains('Sneakers').click()
        cy.get('Button').contains('8 / 42').click()
        cy.get('Button').contains('Black').click()
    },

    //After shoes are filtered accordingly, selects the first product on the page and adds it to cart
    addShoesToBag:()=>{
        cy.get("[class='product___2Vny7']").eq(0).click()
        cy.get("[id='add-to-cart-ss17']").click()
    },

}