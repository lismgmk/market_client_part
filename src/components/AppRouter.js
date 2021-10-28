import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {authRoutes, publickRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter =observer(
    () => {

        const {user} = useContext(Context)
        return (
            <Switch>
                {user.isAuth && authRoutes.map(({ path, component,}) =>
                    <Route exact key={path} patch={path} component={component}/>
                )}
                {publickRoutes.map((i) =>
                        <Route exact key={i.path} patch={i.path} component={i.component} />
                    )}
                <Redirect to={SHOP_ROUTE}/>
            </Switch>
        )
    }
)

export default AppRouter;