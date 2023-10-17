describe("Validating Alerts",()=>{
    it("Validating Pop-Up",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#alertbtn").click()
        cy.get("#confirmbtn").click()
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })
})
    it("Validating Child Window",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // we will remove the target attribute and then click on the button so that it will open the tab in the same page
        cy.get("#opentab").invoke('removeAttr','target').click()
        //setting the origin so that operations can be performed on new URL
        cy.origin("https://www.qaclickacademy.com/",()=>{
        cy.wait(2000)
        cy.get('#navbarSupportedContent a[href*="about"]').click()
        cy.get('.mt-50 h2').should('contain','QAClick Academy')
        })
    })



})