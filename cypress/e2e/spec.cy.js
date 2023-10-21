describe('template spec', () => {

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

    it('Contact us', () => {

        cy.visit('/')

        cy.get('.navbar-nav a').contains('Contact us').click()

        cy.get('h2').contains('Get In Touch').should('be.visible')

        cy.get('input[data-qa="name"]').type('Guest')

        cy.get('input[data-qa="email"]').type('guest@yopmail.com')

        cy.get('input[data-qa="subject"]').type('I have a question')

        cy.get('textarea[data-qa="message"]').type('How can access this?{enter}Thank you')

        cy.fixture('user_icon.png',{encoding: null}).as('fileUpload')

        cy.get('input[name="upload_file"]').selectFile('@fileUpload')

        cy.get('input[data-qa="submit-button"]').click()

        cy.get('.alert-success').contains('Success! Your details have been submitted successfully.').should('be.visible')

        cy.get('#form-section a').click()

        cy.url().should('eq', Cypress.config('baseUrl'))
    })

    it('Verify subscription on homepage', () => {

        cy.visit('/')

        cy.scrollTo('bottom')

        cy.get('h2').contains('Subscription').should('be.visible')

        cy.get('#susbscribe_email').type('guest@yopmail.com')

        cy.get('#subscribe').click()

        cy.get('*').contains('You have been successfully subscribed!').should('be.visible')
    })
})