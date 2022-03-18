import Head from 'next/head';
import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pawna Camp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="mainBanner">
          <Container >
            <div className='w-100'>
              <Row>
                <Col>
                  <h1>Pawna Camping</h1>
                  <p>Full Adventure & close to Nature</p>
                </Col>
              </Row>
              <div className='w-100 d-flex justify-content-center'>
                <Form className='homeBookingForm px-4 p-3 bg-white rounded shadow-lg' >
                  <Row className="g-4">
                    <Col md={5}>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Booking Date"
                      >
                        <Form.Control type="Date" placeholder="Booking Date" />
                      </FloatingLabel>
                    </Col>
                    <Col md={4}>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Number Person"
                      >
                        <Form.Control type="number" placeholder="Number Person" />
                      </FloatingLabel>
                    </Col>
                    <Col md={3}>
                      <Button variant="primary" type="submit" className='h-100 w-100 text-uppercase'>
                        Book Now
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </Container>
        </div>
      </main>
      <footer>

      </footer>
    </div>
  )
}
