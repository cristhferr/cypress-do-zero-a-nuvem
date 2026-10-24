describe('Advantage Demo', () => {
  it('acessa o site e verifica o título', () => {
    cy.visit('https://advantageonlineshopping.com/#/')
    cy.title().should('eq', '\u00a0Advantage Shopping')
  })

  it('cria uma conta com credenciais aleatórias', () => {
    const seed = Cypress._.random(100000, 999999)
    const username = `cy${seed}`
    const email = `${username}@example.com`
    const password = `Pass${seed}a`

    cy.visit('https://advantageonlineshopping.com/#/')
    cy.get('#menuUser').click()
    cy.contains('a', 'CREATE NEW ACCOUNT').click()

    cy.get('[name="usernameRegisterPage"]').type(username)
    cy.get('[name="emailRegisterPage"]').type(email)
    cy.get('[name="passwordRegisterPage"]').type(password, { log: false })
    cy.get('[name="confirm_passwordRegisterPage"]').type(password, {
      log: false,
    })
    cy.get('[name="first_nameRegisterPage"]').type('Cypress')
    cy.get('[name="last_nameRegisterPage"]').type('Tester')
    cy.get('[name="phone_numberRegisterPage"]').type('2025550147')
    cy.get('[name="countryListboxRegisterPage"]').select('United States')
    cy.get('[name="cityRegisterPage"]').type('Springfield')
    cy.get('[name="addressRegisterPage"]').type('123 Cypress Lane')
    cy.get('[name="state_/_province_/_regionRegisterPage"]')
      .scrollIntoView({ offset: { top: 100, left: 0 } })
      .type('California')
    cy.get('[name="postal_codeRegisterPage"]')
      .scrollIntoView({ offset: { top: 100, left: 0 } })
      .type('90210')
    cy.get('[name="allowOffersPromotion"]')
      .scrollIntoView({ offset: { top: 100, left: 0 } })
      .check()
      .should('be.checked')
    cy.get('#i_agree')
      .scrollIntoView({ offset: { top: 100, left: 0 } })
      .check()
      .should('be.checked')
    cy.get('#register_btn').click()

    cy.get('#menuUser').click()
    cy.get('input[name="username"]').type(username)
    cy.get('input[name="password"]').type(password, { log: false })
    cy.get('#sign_in_btn').click()
    cy.get('#menuUserLink').should('contain.text', username)
  })
})
