module.exports = {

    showMensShoesHover:()=>{
        cy.get("[class='nav-item-link___1CNeA']").find("span").contains('Men').trigger('mouseover')
    },

    checkListofProducts:()=>{
        cy.get("[href='/men/shoes/trainers'").should('be.visible')
        cy.get("[href='/men/shoes/loafers'").should('be.visible')
        cy.get("[href='/men/shoes/formal'").should('be.visible')
        cy.get("[href='/men/shoes/casuals'").should('be.visible')
    },

    selectCategory:()=>{
        cy.get("[href='/men/shoes/boots'").should('be.visible').click()
    },

    assertBootsPage:()=>{
        cy.url().should('eq', 'https://www.kurtgeiger.com/men/shoes/boots')
        cy.contains('Men\'s Boots')
    },

    selectMensShoesFilters:()=>{
        cy.get('Button').contains('Sneakers').click()
        cy.get('Button').contains('8 / 42').click()
        cy.get('Button').contains('Black').click()
    },

    addShoesToBag:()=>{
        cy.get("[class='product___2Vny7']").eq(0).click()
        cy.get("[id='add-to-cart-ss17']").click()
    }
}