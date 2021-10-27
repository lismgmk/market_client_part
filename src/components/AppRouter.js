import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {authRoutes, publickRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";

const AppRouter = () => {

    const isAuth = false

    return (
        <Switch>
            {isAuth && authRoutes.map(({component, path}) => {
                return <Route key={path} patch={path} component={component} exact/>
            })
            }
            {
                publickRoutes.map(({component, path}) => {
                    return <Route key={path} patch={path} component={component} exact/>
                })
            }
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;