describe("Testing Mousehover",()=>{
    it("Validating it using Jquery Command",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //using show method we will invoke the tab and get all the hidden elements. Show is a jquery method and not a cypress command or method.
        // we canalso use force:true it will click on top but it wont be visisble to us,it will internally interact with DOM and click.
        cy.get("div.mouse-hover-content").invoke('show')
        cy.contains("Top").click()
        cy.url().should('include','top')
    })

    
})