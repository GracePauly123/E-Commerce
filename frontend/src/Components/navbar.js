import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';

function NavigationBar() {
    return (
        <div>
       <Navbar bg="danger" variant="dark">
            <Container className="position-left">
              <img className="img-icon" src="/images/fl.jpeg" alt="img" />
              <LinkContainer to="/">
                <Navbar.Brand className="brand-name">fabLovers</Navbar.Brand>
              </LinkContainer>
              <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <a href="/" className="nav-link px-2 text-white">
                    Formal Suits
                  </a>
                </li>
                <li>
                  <a href="/" className="nav-link px-2 text-white">
                    Casual wear
                  </a>
                </li>
                <li>
                  <a href="/" className="nav-link px-2 text-white">
                    Winter wear
                  </a>
                </li>
                <li>
                  <a href="/" className="nav-link px-2 text-white">
                    Clearance
                  </a>
                </li>
              </ul>
              <form
                class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                role="search"
              >
                <input
                  type="search"
                  class="form-control search-color"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </form>
              <div class="text-end">
                <button type="button" class="btn btn-outline-light me-2">
                  Login
                </button>
                <Link to="/Signup" >
                  <img className="img-cart" alt="cart" src="/images/cart.png" />
                  </Link>
              </div>
            </Container>
          </Navbar>
        </div>
    )
}

export default NavigationBar;