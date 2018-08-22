'use strict';

const React = require('react');
const PropTypes = require('prop-types');

const AuthorList = ({ authors }) => {
    const createAuthorRow = author => (
        <tr key={author.id}>
            <td>
                <a href={'/#authors/' + author.id}>{author.id}</a>
            </td>
            <td>
                {author.firstName} {author.lastName}
            </td>
        </tr>
    );
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>{authors.map(createAuthorRow, this)}</tbody>
            </table>
        </div>
    );
};

AuthorList.propTypes = {
    authors: PropTypes.array.isRequired
};

module.exports = AuthorList;
