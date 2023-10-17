describe("Practicing Concepts on Miraj Trading",()=>{
    it("Validating Dropdown List",()=>{
        cy.visit("https://www.mirajtrading.com/#")
        cy.get(':nth-child(2) > .nav-bar__link').click()
        cy.get("body > div:nth-child(6) > section:nth-child(1) > nav:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)").click()
        //cy.get("#desktop-menu-0-2").each(($el,index,$list)=>{
          //  cy.get('li a[href="/collections/hockey-cards"]').eq(3).click()
            //const find=$el.find(".nav-dropdown__item").text()
        //if(find.includes("Soccer Cards")){
          //  cy.wrap($el).click()
        //}
        //})
        cy.get('.collection__title.heading.h1').should('contain', 'Hockey')
    })

})
