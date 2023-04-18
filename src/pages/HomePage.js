import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <br />
      <h2>From mouthwatering cuisine to mesmerizing viewpoints...</h2>
      <h2>- Uncover Hong Kong's hidden gems -</h2>
      <hr />
      <Carousel interval={3000}>
        <Carousel.Item>
          <img
            style={{ height: '500px', width: '800px' }}
            src="/img/Choi Hung View.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Slide 1</h3>
            <p>Description for slide 1</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: '500px', width: '800px' }}
            src="/img/Disney Day.jpeg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Slide 2</h3>
            <p>Description for slide 2</p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </div>  
  );
}

export default HomePage;


