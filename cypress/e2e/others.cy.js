describe('Other pages', () => {

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