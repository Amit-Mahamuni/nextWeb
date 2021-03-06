import { Col, Container, Row } from "react-bootstrap";
import NavBar from '../components/navbar';
import Head from 'next/head';
import FooterSection from '../components/footer';

export default function About() {
    return (
        <div>
            <Head>
                <title>About Us</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <main>
                <div className="headBanner">
                    <Container >
                        <Row >
                            <Col>
                                <h1>About Us</h1>
                                <h5>How can we help you today?</h5>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container>
                    <Row className="py-5">
                        <Col >
                            <h3>About Pawna Camping</h3>
                            <p>
                                Pawna Camping is the well-known and the smart site for the Pawna Lake Camping.
                                This online website provides you trust and satisfaction. Pawnacamping.in is
                                the only website to offer the best tent camping at a low cost, we first priority
                                to our client’s satisfaction. At the lakeside, you will find client-friendly staff
                                which will guide you properly. At our website, the tent booking system is not
                                complicated. You just have to select the date of check-in, the quantity of the
                                persons and then you have to check out from the cart. And done!!! The payment
                                process is also simple. You can pay the money via internet banking, wallets, credit
                                cards, and debit cards.
                            </p>
                        </Col>
                    </Row>
                    <Row className="py-5">
                        <Col md={4}>
                            <h4>Who Are We</h4>
                            <p>
                                We are an outdoor lover. We like to see nature as close as possible. Also,
                                We like to show you adventure life in Pawna Lake Camping.
                            </p>
                        </Col>
                        <Col md={4}>
                            <h4>Our Mission</h4>
                            <p>
                                Pawna Camping is a dream of every adventure lover. Our mission is to make your dream come true.
                            </p>
                        </Col>
                        <Col md={4}>
                            <h4>What We Do</h4>
                            <p>
                                We providing best Pawna camping experiences. So, You can create a fresh & beautiful
                                memory with your family & friends.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </main>
            <FooterSection />
        </div>
    )
}