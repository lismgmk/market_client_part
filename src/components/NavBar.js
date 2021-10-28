import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";


const NavBar = observer(
    () => {

        const {user} = useContext(Context)

        return (

                <Navbar className={'d-flex justify-content-between'} bg="dark" variant="dark">
                    <Container>
                    <NavLink to={SHOP_ROUTE} style={{color: 'white'}}>КупиДевайс</NavLink>
                    {user.isAuth ?
                        <Nav style={{color: 'white'}}>
                            <Button variant={'outline-light'}>Админ панель</Button>
                            <Button variant={'outline-light'}
                                    className='ms-4'

                            >Войти</Button>
                        </Nav>
                        :
                        <Nav style={{color: 'white'}} >
                            <Button
                                variant={'outline-light'}
                                onClick={()=> user.setIsAuth(true)}
                            >Авторизация</Button>
                        </Nav>

                    }
            </Container>
                </Navbar>


        )
    }
)

export default NavBar;