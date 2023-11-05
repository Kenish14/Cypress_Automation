/// <reference types="Cypress"/>
//importing homepage object file and ShopPage Files
import HomePage from "../pageObjects/HomePage"
import ShopPage from "../pageObjects/ShopPage"
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
        //using objects created from homepage.js direclty.
        const homePage=new HomePage()
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        homePage.getNameBox().type(globalThis.data.name)
        homePage.getGender().select(globalThis.data.gender)
        // Validation1- validating if bob is present in two binding box or not
        homePage.getTwoWayBox().should('have.value',globalThis.data.name)
        // Validation 2- we will validate that the attribute of the element. here we will check that minimum length attribute length is 2 or not
        //h.should('have.attr','minlength','2') 
        //Validation 3- we will check if the radio button is diabled or not
        homePage.getEntrepruener().should('be.disabled')
        
    })

    it("Validating Shop",()=>{
        const shop=new ShopPage()
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        shop.getShop().click()
        // we will write a function to add multiple items in the cart
        //Step 1 Find a common element which is the same for everyone and then iterate through each and whenevere found add that item to cart
        //Step 2 once we got the text we will add this item into the cart. Same Stratergy for the button (Add to Cart) to click on it.
        //Step 3 once we write the logic we will write the function in commands.js file and assign the entire function to a command and just call that whenever we want to validate the fucntion (Add to cart)
        
        //using globalthis to fetch productname from fixtures 
        
        // iterate through for loop and get the products intop the cart
        //use cy.pause() to check if everything is fine and debugg the code. basically works as a check point.
        globalThis.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        });
        //Do the end-to-end testing using page object class for shop page,
        shop.getCheckout().click()
        var sum=0
        shop.getProductPrice().each(($el,index,$list)=>{
        //telling javascript that this is not a string but a number.
           
            const actualText=$el.text()
            var res=actualText.split(" ")
            res=res[1].trim()
            //cy.log(res)
            sum=Number(sum)+Number(res)
        //resolving promise so that it works synchronously.
        }).then(function()
        {
            cy.log(sum)
        })
        cy.get('h3 strong').then(function(element){
            const text=element.text()
            var res=text.split(" ")
            var total=res[1].trim()
            expect(Number(total)).equal(sum)
        })
        
        shop.getCheckoutCart().click()
        shop.getCountry().type("India")
        shop.getCountryPopUp().click()
        shop.getCheckBoxCheckout().click({force:true})
        shop.getPurchaseButton().click()
        shop.getAlertText().contains("Success")
        
    })
})