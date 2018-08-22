'use strict';

// this file is mocking a web api by hitting hard coded data
const authors = require('./authorData').authors;
const _ = require('lodash');

// this would be performed on the server in a real application - just stubbing this in for now
const _generateId = author => author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();

const _clone = item => JSON.parse(JSON.stringify(item)); // return cloned copy so the item is passed by value instead of by reference

const AuthorApi = {
    getAllAuthors: () => _clone(authors),

    getAuthorById: id => {
        const author = _.find(authors, { id });
        return _clone(author);
    },

    saveAuthor: author => {
        // pretend an ajax call to web api is made here
        console.log('Pretend this just saved the author to the DB via AJAX call...');

        if (author.id) {
            const existingAuthorIndex = _.indexOf(authors, _.find(authors, { id: author.id }));
            authors.splice(existingAuthorIndex, 1, author);
        } else {
            // just simulating creation here.
            // the server would generate ids for new authors in a real app
            // cloning so copy returned is passed by value rather than by reference
            author.id = _generateId(author);
            authors.push(author);
        }

        return _clone(author);
    },

    deleteAuthor: id => {
        console.log('Pretend this just deleted the author from the DB via AJAX call...');
        _.remove(authors, { id });
    }
};

module.exports = AuthorApi;
