'use strict';

const React = require('react');
const AuthorApi = require('../../api/authorApi');
const AuthorList = require('./authorList');

class AuthorPage extends React.Component {
    constructor() {
        super();

        this.state = {
            authors: []
        };
    }

    componentDidMount() {
        this.setState({ authors: AuthorApi.getAllAuthors() });
    }

    render() {
        return (
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
}

module.exports = AuthorPage;
