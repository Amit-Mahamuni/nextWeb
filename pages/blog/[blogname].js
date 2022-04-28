import { Container, Row, Col } from "react-bootstrap";
import NavBar from '../../components/navbar';
import Head from 'next/head';
import FooterSection from '../../components/footer';

export const getStaticPaths = async () => {
    const res = await fetch("https://pawnacamping.in/wp-json/wp/v2/posts")
    const data = await res.json()
    let paths = data.map(x => {
        return {
            params: {
                blogname: String(x.link).split("/")[3],
            }
        }
    })
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const url = context.params.blogname;
    const res = await fetch("https://pawnacamping.in/wp-json/wp/v2/posts")
    const data = await res.json();
    const blogdata = data.find(x => String(x.link).split("/")[3] == url)
    return {
        props: {
            blogdata: blogdata ? JSON.parse(JSON.stringify(blogdata)) : null
        }
    }
}


export default function SingleBlog(data) {
    let ctn = data.blogdata
    return (
        <div>
            <Head>
                <title>{ctn.title.rendered}</title>
            </Head>
            <NavBar />
            <main>
                <div className="headBanner">
                    <Container >
                        <Row >
                            <Col>
                                <h1>{ctn.title.rendered}</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="py-5">
                    <Row>
                        <Col md={8} sm={12}>
                            <div dangerouslySetInnerHTML={{ __html: ctn.content.rendered }} ></div>
                        </Col>
                        <Col md={4}></Col>
                    </Row>
                </Container>
            </main>
            <FooterSection />
        </div>

    )
}