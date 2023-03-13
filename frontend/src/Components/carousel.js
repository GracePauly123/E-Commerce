
import Carousel from 'react-bootstrap/Carousel';
function CarouselImg() {
  return (
    <div>
      {/* <img  className="carouselImg" src="../images/fashionCarousel.jpg" alt="carouselImg"></img> */}
      <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 carouselImg"
          src="../images/fashionCarousel.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 carouselImg"
          src="../images/carousel.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselImg"
          src="../images/carousel2.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
    </div>
  );
}
export default CarouselImg;
