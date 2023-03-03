import HomeScreen from './Components/screens/HomeScreen';
import ProductScreen from './Components/screens/ProductScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="container d-flex flex-column ">
        <header>
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
                <a href="/">
                  <img className="img-cart" src="/images/cart.png" />
                </a>
              </div>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className='site-container'>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer class="py-5 footer-bg-color">
          <Container>
            <div class="row">
              <div class="col-6 col-md-2 mb-3">
                <h5>Get to know us</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Home
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Features
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Pricing
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      FAQs
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-6 col-md-2 mb-3">
                <h5>Make money with us</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Sell on FabLovers
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Supply to FabLovers
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Independently publish with us
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Our Planet
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-6 col-md-2 mb-3">
                <h5>Let us help you</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Covid 19 and FabLovers
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Shipping rates an polices
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Returns are easy
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Customer services
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Manage your content and devices
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-md-5 offset-md-1 mb-3">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of what's new and exciting from us.</p>
                  <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label for="newsletter1" class="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      class="form-control"
                      placeholder="Email address"
                    />
                    <button class="btn btn-primary btn-color" type="button">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <p>© 2023 Company, Inc. All rights reserved.</p>
              {/* <ul class="list-unstyled d-flex">
        <li class="ms-3"><a className="link-dark" href="/"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
        <li class="ms-3"><a className="link-dark" href="/"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li class="ms-3"><a className="link-dark" href="/"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
        </ul> */}
            </div>
          </Container>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
