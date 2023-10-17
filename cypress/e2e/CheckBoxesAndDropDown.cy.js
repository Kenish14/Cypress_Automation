//In this test we will try to validate and test checkboxes.
describe("Checkbox and Dropdown validation and Radio Buttons",()=>{
    it("Test cases to verify Check boxes",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        //cy.get("#checkBoxOption1").uncheck().should("be.checked")
        cy.get('[value="radio3"]').check().should('be.checked').and('have.value','radio3')

    })


    it("Test cases for Static Dropdown Validations ",()=>{

    
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('select').select('option2').should('have.value','option2')
    
   

    })
    
    it("Test Cases for Dynamic Dropdown Validations",()=>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#autocomplete').type('ind')
    cy.get('.ui-menu-item div').each(($el,index,$list)=>{
    cy.wait(3000)
        if($el.text==="India"){
            cy.wrap($el).click()
        }
    
    })
    //cy.get('#autocomplete').should('have.value','India')

})

   it("Test cases to handle Invisible and Visible elements",()=>{
   cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
   cy.get("#displayed-text").should('be.visible')
   cy.get("#hide-textbox").click()
   cy.get('#displayed-text').should('not.be.visible')
   cy.get("#show-textbox").click()
   cy.get("#displayed-text").should('be.visible')
   })

})