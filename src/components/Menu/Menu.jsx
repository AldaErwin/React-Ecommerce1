import {Navbar, Container, Nav , NavDropdown} from 'react-bootstrap'

function Menu() {
    // const {param1} = props
    // console.log(props)
    return (
        <>
            <Navbar bg="dark" expand="md">
                <Container>
                    <Navbar.Brand href="#home" className="text-white d-flex justify-content-end">LOGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className='text-white'>Inicio</Nav.Link>
                        <Nav.Link href="#link" className='text-white'>Gorras</Nav.Link>                    
                        <Nav.Link href="#link" className='text-white'>Remeras</Nav.Link>                                                            
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Menu