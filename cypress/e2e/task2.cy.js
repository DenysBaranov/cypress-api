/// <reference types="cypress" />
import profile from '../fixtures/profile.json'

describe('Profile info', () => {

    it('Interception user data', () => {
        cy.intercept('GET', 'https://qauto.forstudy.space/api/users/profile', profile);
        cy.visit('https://qauto.forstudy.space/', {
            auth: {

                username: 'guest',
                password: 'welcome2qauto',
            }
        })
        cy.contains('Sign In').click();
        cy.get('#signinEmail').type('mail123@gmail.com');
        cy.get('#signinPassword').type('Test1234');
        cy.contains('Login').click();
        cy.get('a.-profile').click();

        cy.get('p.profile_name').should('have.text', 'Polar Bear');
        cy.get('.profile-info_text').contains('11.11.2011');
        cy.get('.profile-info_text').contains('USA');
    })
})
