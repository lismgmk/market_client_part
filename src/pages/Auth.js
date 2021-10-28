import React from 'react';
import {Card, Container} from "react-bootstrap";

const Auth = () => {
    debugger
    return (
        <Container
        className={"d-flex justify-content-center align-items-center"}
        style={{height: window.innerHeight - 54}}
        >
            <Card>
                <h2 className={"m-auto"}>Авторизация</h2>
            </Card>

        </Container>
    );
};

export default Auth;