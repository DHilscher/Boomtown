import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import configStore from './configStore';
import { Provider } from 'react-redux';
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
import { Share } from './containers/Share';
import Items from './containers/Cards';

const store = configStore();


class Boomtown extends Component {

    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <Router>
                            <Layout>
                            <Switch>
                                <Route exact path="/" component={Items}/>
                                <Route path="/login" component={Login}/>
                                <Route path="/share" component={Share}/>
                                <Route path="/profile/[{this.props.users.id}]" />
                                <Route path="*" />
                            </Switch>

                            </Layout>
                    </Router>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
