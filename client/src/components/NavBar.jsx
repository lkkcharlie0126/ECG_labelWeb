import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Links from './Links'


const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    margin-bottom: 20 px;
`

// const Nav = styled.nav({
//     background: '#0082e6',
//     height: '80px',
//     width: '100%',
// })


class NavBar extends Component {
    render() {
        return (
            // <Container>
                <Nav>
                    <Logo />
                    <Links />
                </Nav>
            // </Container>
        )
    }
}

export default NavBar