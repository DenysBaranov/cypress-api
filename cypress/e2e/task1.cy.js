/// <reference types="cypress" />

describe('Use cy.request', () => {

    it('GET request post title', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').its('body[3].title').should('eq', 'eum et est occaecati');

    })

    it('GET request email in comment', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/comments').its('body[2].email').should('eq', 'Nikita@garfield.biz');

    })

    it('GET request albums id', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/albums').its('body[2].id').should('eq', 3);

    })

    it('GET request photos url', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/photos').its('body[3].url').should('eq', 'https://via.placeholder.com/600/d32776');

    })

    it('POST request new album', () => {

        const newAlbum = {
            userId: 1,
            id: 1,
            title: "Test new album"
        }

        cy.request('POST', 'https://jsonplaceholder.typicode.com/albums', newAlbum).as('newAlbum');

        cy.get('@newAlbum').its('body.userId').should('eq', 1);
        cy.get('@newAlbum').its('body.title').should('eq', 'Test new album');
    })
})