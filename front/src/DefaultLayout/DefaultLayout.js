import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import routes from '../routes';
import Header from './Header';
import SideMenuBar from './SideMenuBar';
import Footer from './Footer';

const DefaultLayout = () => {
    return (
        <div>
            <Header/>
            <div className="container-fluid page-body-wrapper">
                <SideMenuBar/>
                <div className="content-wrapper">
                    <Switch>
                        {
                            routes.map((route, id) => {
                                return route.component ? (
                                    <Route key={id}
                                           path={route.path}
                                           exact={route.exact}
                                           name={route.name}
                                           render={props => <route.component {...props}/>}/>
                                ) : null
                            })
                        }
                        <Redirect from="/" to="/tasks-list"/>
                    </Switch>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;