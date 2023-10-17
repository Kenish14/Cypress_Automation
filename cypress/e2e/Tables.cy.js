describe('Validating Web Tables',()=>{
    it('Test Cases for Validating Web Tables',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //taking all the row content in an array and then we will find the required one
        cy.get("tr td:nth-child(2)").each(($el,index,$list)=>{
        const findSearch=$el.text()
        if(findSearch.includes("Python"))
        {
            //finding the price therefore we will find the sibling of it 
            //we will use index to find the sibling as index also gets updated and use next() to find the next sibling
            cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
            {
                const priceText= price.text()
                expect (priceText).to.equal('25')
            })
             

        }

        
        })


    })
})