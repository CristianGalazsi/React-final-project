import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './Navbarelements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>bookyourDJ.com</h1>
                </NavLink>
                <Bars />
                <NavMenu>

                    <NavLink to="/about">
                        About
                    </NavLink>
                    <NavLink to="/artists" >
                        Artists
                    </NavLink>
                    <NavLink to="/signup" >
                        Sign Up
                    </NavLink>
                    <NavLink to="/booknow" >
                        Book Now
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar