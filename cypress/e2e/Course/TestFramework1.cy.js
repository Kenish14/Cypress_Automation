/// <reference types="Cypress"/>
describe("Test Cases Using Hooks",()=>{
    
    before(function() {
        // executes once prior all tests in it block
        cy.log("Before hook")
        cy.fixture('example').then(function(data)
        {
            globalThis.data=data
        })
     })
    
    it("Using Before Hook and Validating other Assertions ",()=>{
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get("input[name='name']:nth-child(2)").type(globalThis.data.name)
        cy.get('select').select(globalThis.data.gender)
        // Validation1- validating if bob is present in two binding box or not
        cy.get(":nth-child(4) > .ng-untouched").should('have.value',globalThis.data.name)
        // Validation 2- we will validate that the attribute of the element. here we will check that minimum length attribute length is 2 or not
        cy.get("input[name='name']:nth-child(2)").should('have.attr','minlength','2') 
        //Validation 3- we will check if the radio button is diabled or not
        cy.get('#inlineRadio3').should('be.disabled')
        
    })

    it("Validating Shop",()=>{
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get("body > app-root:nth-child(1) > app-navbar:nth-child(1) > div:nth-child(1) > nav:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)").click()
        // we will write a function to add multiple items in the cart
        //Step 1 Find a common element which is the same for everyone and then iterate through each and whenevere found add that item to cart
        //Step 2 once we got the text we will add this item into the cart. Same Stratergy for the button (Add to Cart) to click on it.
        //Step 3 once we write the logic we will write the function in commands.js file and assign the entire function to a command and just call that whenever we want to validate the fucntion (Add to cart)
        
        //using globalthis to fetch productname from fixtures 
        
        // iterate through for loop and get the products intop the cart
        globalThis.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        });
        
    
    })
})