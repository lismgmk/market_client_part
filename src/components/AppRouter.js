import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {authRoutes, publickRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";

const AppRouter = () => {

    const {user} = useContext(Context)
    return (
        <Switch>
            {!user.isAuth && authRoutes.map(({component, path}) => {
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