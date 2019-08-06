import React,{ Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from './routes/history';
import Loadable from 'react-loadable';

function MyLoadingComponent() {
    return <div>Loading...</div>;
}
  
const LandingPage = Loadable({
    loader: () => import('./routes/landing/LandingPage.jsx'),
    loading: MyLoadingComponent,
});

const NotFound = Loadable({
    loader: () => import('./routes/notFound/NotFound'),
    loading: MyLoadingComponent,
});

class Routes extends Component{
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route exact path='/' render={() =><Redirect to="/landing" />}/>
                    <Route path='/landing' component={LandingPage}/>
                    <Route path='/*' component={NotFound}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes;