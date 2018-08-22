const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router-dom');
const Routes = require('./routes');
const App = require('./components/app');

const BrowserRouter = Router.BrowserRouter;

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app')
);
