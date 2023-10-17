describe('My First Test',() =>{
  it('Verify-title test',() =>{
     cy.visit("https://www.google.com/");
     cy.title().should('eq','Google');
    })

  it('Verify-title Negative test',()=>{
    cy.visit("https://www.google.com/");
    cy.title().should('eq','Gooogle');
  })
})