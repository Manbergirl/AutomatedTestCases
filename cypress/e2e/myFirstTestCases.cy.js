describe('MyFirstSuites', () => 
{
     it('verify tittle_positive', () => 
     {
     cy.visit("https://opensource-demo.orangehrmlive.com/")
     cy.title().should('eq','OrangeHRM')
     })

     it('verify tittle_negative', () => 
     {
     cy.visit("https://opensource-demo.orangehrmlive.com/")
     cy.title().should('eq','OrangeHRM123')
     })

  })
