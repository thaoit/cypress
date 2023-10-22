describe('Register page', () => {

    it('Register user', () => {

      cy.fixture('registered_data').then(data => {

          cy.visit('/')

          cy.get('a').contains('Signup / Login').click()

          cy.get('h2').contains('New User Signup!').should('be.visible')

          cy.get('input[data-qa="signup-name"]').type(data.signup_name)

          cy.get('input[data-qa="signup-email"]').type("test_" + Date.now().toString() + "@yopmail.com")

          cy.get('button[data-qa="signup-button"]').click()

          cy.get('h2').contains('Enter Account Information').should('be.visible')

          cy.get('input[name="title"]').eq(Math.round(Math.random())).click()

          cy.get('#password').type(data.password)

          cy.get('#years').select(data.birth_year)

          cy.get('#months').select(data.birth_month)

          cy.get('#days').select(data.birth_day)

          cy.get('#newsletter').click()

          cy.get('#optin').click()

          // address info

          cy.get('#first_name').type(data.first_name)

          cy.get('#last_name').type(data.last_name)

          cy.get('#company').type(data.company)

          cy.get('#address1').type(data.address1)

          cy.get('#address2').type(data.address2)

          cy.get('#country').select(data.country)

          cy.get('#state').type(data.state)

          cy.get('#city').type(data.city)

          cy.get('#zipcode').type(data.zipcode)

          cy.get('#mobile_number').type(data.phone)

          cy.get('button[data-qa="create-account"]').click()

          cy.get('h2').contains('Account Created!')

          cy.get('a[data-qa="continue-button"]').click()

          cy.get('.navbar-nav a').contains('Logged in as ' + data.signup_name)

          cy.get('.navbar-nav a').contains('Delete Account').click()

          cy.get('h2').contains('Account Deleted!').should('be.visible')
      })
        
    })
})