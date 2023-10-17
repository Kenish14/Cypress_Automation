///<refrence types="cypress-iframe"/>
import 'cypress-iframe'

describe("Validating iFrame",()=>{
    it("Test case to validate iFrame",()=>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.frameLoaded("#courses-iframe")
    cy.iframe().find("a[href*='mentorship']").eq(0).click()
    })
})