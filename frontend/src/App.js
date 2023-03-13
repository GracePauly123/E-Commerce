import HomeScreen from './Components/screens/HomeScreen';
import ProductScreen from './Components/screens/ProductScreen';
import Signup from './Components/signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import NavigationBar from './Components/navbar';
import FooterSection from './Components/footer';
import CarouselImg from './Components/carousel';

function App() {
  return (
    <BrowserRouter>
      <div className="container d-flex flex-column ">
        <header>
          <NavigationBar />
        </header>
        <main>
          
          <Container className="site-container">
       
            <Routes>
              <Route path='/signup' element={<Signup/>}/>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer class="py-5 footer-bg-color">
          <FooterSection />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
