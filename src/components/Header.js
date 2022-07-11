import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import image from '../images/notice-img.png';

function Header() {
    return(
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <img
                            alt=""
                            src={image}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Buscador de Noticias
                    </Navbar.Brand>
                </Container>
            </Navbar>
    )
}

export default Header;