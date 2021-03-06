import { Row, Col, Container, Card, Button } from "react-bootstrap";
import NavBar from '../../components/navbar';
import Head from 'next/head';
import FooterSection from '../../components/footer';
import Link from 'next/link';

export const getServerSideProps = async () => {
    const res = await fetch("https://pawnacamping.in/wp-json/wp/v2/posts")
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}

export default function Blogs({ data }) {
    return (
        <div>
            <Head>
                <title>Blogs</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <main>
                <div className="headBanner">
                    <Container >
                        <Row >
                            <Col>
                                <h1>Blogs</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="py-5">
                    <Row xs={1} md={3} className="g-4">
                        {data.map((x) => (
                            <Col key={x.id}>
                                <Card className="shadow ">
                                    <Card.Img variant="top" src="https://directory-v2.vercel.app/_next/image?url=%2Fcontent%2Fimg%2Fphoto%2Fphoto-1526392060635-9d6019884377.jpg&w=1080&q=75" />
                                    <Card.Body>
                                        <Card.Title>{x.title.rendered}</Card.Title>
                                        {/* <Card.Text dangerouslySetInnerHTML={{ __html: x.excerpt.rendered }}></Card.Text> */}
                                        <Link href={"/blog/"+String(x.link).split("/")[3]}><Button variant="outline-dark">Read More</Button></Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </main>
            <FooterSection />
        </div>
    )
}
