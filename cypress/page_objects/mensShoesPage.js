module.exports = {

    showMensShoesHover:()=>{
        cy.get("[class='nav-item-link___1CNeA']").find("span").contains('Men').trigger('mouseover')
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