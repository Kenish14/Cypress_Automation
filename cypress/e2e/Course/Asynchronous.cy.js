describe('Understanding the Concept',()=>{
    it('Getting the title',()=>{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    //here brand.text is not a cypress function and was a manual function hence gives an error because of its asynchronous nature therefore we will use then()
    cy.get('.brand.greenlogo').should('have.text',"GREENKART")
    cy.get(".brand.greenlogo").then(function(logoelement){
        cy.log(logoelement.text())
    
    })
    })

    it('Checking the items in cart and placing the order',()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".products").find(".product").each(($el,index,list)=>{
            const VegName=$el.find("h4.product-name").text()
            if(VegName.includes("Cucumber")){
                cy.wrap($el).find('button').click()
            }
        })
        cy.get(".cart-icon").should("be.visible").click();
        cy.get("div.container div.container div.cart div.cart-preview.active:nth-child(6) div.action-block:nth-child(2) > button:nth-child(1)").click();
        cy.get("div.container div.products-wrapper:nth-child(2) div.products div:nth-child(4) > button:nth-child(14)").click()
        
    })
})