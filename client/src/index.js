import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from '../node_modules/react-router-dom';

import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';
import Login from './containers/Login';

class Boomtown extends Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/" />
                            <Route path="/login" />
                            <Route path="/share" />
                            <Route path="/profile/[ID_HERE]" />
                            <Route path="*" />
                        </Switch>
                        <Layout>




                        </Layout>
                    </div>
                </Router>
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
