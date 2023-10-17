/// <reference types="Cypress"/>


describe('Test Suite- Locators',()=>{
    it('Test Case1- Locators',()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".search-keyword").type("ca")
        cy.wait(2000)
        // getting the elements that are only visible
        // if the test fails debugg it using the screenshot (Time Travel feature)
        cy.get(".product:visible").should('have.length',4)
        // we can also look for visisble products using parent child relationship
        // for instance parent product hai toh uske inside 4 child hi dikhne chaiye so we will just get them (FIND METHOD)
        cy.get(".products").find('.product').should('have.length',4)

    })



    it('Test Case 2- Add To Cart',()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".search-keyword").type("ca")
        cy.wait(2000)
        //using the below statment and concept of aliasig we can store the locator into a variable and the use it with @name.
        cy.get(".products").as("ProdutLocator")
        cy.get("@ProductLocator").find('.product').should('have.length',4)
        // Adding the second element into the cart using "eq" function. (jaise array main hoga 2 index par poinr karega)
        cy.get("@ProductLocator").find(".product").eq(2).contains("ADD TO CART").click()
        // we will add the product only by using the name of it and not the index since it might change if other products are added
        cy.get("@ProductLocator").find(".product").each(($el,index,$list)=>{
            const textVeg= $el.find("h4.product-name").text()
            if(textVeg.includes('Cashews')){
                cy.wrap($el).find('button').click()
            }
        })
        // checking the price if it is incremented by 60
       // cy.get(".products").find(".product").find(".product-price").eq(2).contains("60",60)


    })
})