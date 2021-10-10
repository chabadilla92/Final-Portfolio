import React from 'react';
import { Nav, NavBar, Container, Navbar } from 'react-bootstrap';

export const Navigation = () => {
    return (
        <nav class="sidebar">

                <Navbar.Brand href="#home">Logo</Navbar.Brand>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>  
                <Nav.Link href="#contact">Contact</Nav.Link>

        </nav>
    )
}