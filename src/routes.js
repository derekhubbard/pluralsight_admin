'use strict';

const React = require('react');
const { Route, Switch } = require('react-router-dom');
const Home = require('./components/homePage');
const Authors = require('./components/authors/authorPage');
const About = require('./components/about/aboutPage');

const routes = (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/authors" component={Authors} />
        <Route exact path="/about" component={About} />
    </Switch>
);

module.exports = routes;
