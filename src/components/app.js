const React = require('react');
const Header = require('./common/header');
// const RouteHandler = require('react-router').RouteHandler;
const routes = require('../routes');
$ = jQuery = require('jquery');

const App = props => {
    return (
        <div>
            <Header />
            <div className="container-fluid">{routes}</div>
        </div>
    );
};

module.exports = App;
