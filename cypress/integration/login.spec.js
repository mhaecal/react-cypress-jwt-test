describe('Login - JWT', () => {
  it('using UI', () => {
    cy.visit('/')
    cy.location('pathname').should('equal', '/login')

    // enter valid email and password
    cy.get('[name=email]').type(Cypress.env('email'))
    cy.get('[name=password]').type(Cypress.env('password'))
    cy.contains('button', 'Login').click()

    // authenticated user can visit dashboard
    cy.location('pathname').should('equal', '/dashboard')
    cy.contains('Dashboard')
      .should('be.visible')
      .then(() => {
        const userString = localStorage.getItem('user')

        expect(userString).to.be.a('string')
        const user = JSON.parse(userString)

        expect(user).to.be.an('object')
        expect(user).to.have.keys(['accessToken', 'refreshToken'])

        expect(user.accessToken).to.be.a('string')
      })

    // logout
    cy.contains('Logout')
      .click()
      .should(() => {
        expect(localStorage.getItem('user')).to.be.null
      })
    cy.location('pathname').should('equal', '/login')
  })

  it('unauthenticated user cannot visit dashboard', () => {
    cy.visit('/dashboard')
    cy.location('pathname').should('equal', '/login')
  })

  it('cannot login with invalid password', () => {
    cy.visit('/login')

    cy.get('[name=email]').type(Cypress.env('email'))
    cy.get('[name=password]').type('invalidPassword')
    cy.contains('button', 'Login').click()

    cy.wait(1000)

    // show error message
    cy.get('#swal2-title').should('be.visible')
    cy.get('body').click()

    cy.wait(1000)

    cy.get('.swal2-popup').should('not.exist')
  })
})
