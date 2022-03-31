import { Container, Navbar } from "react-bootstrap";
import Link from 'next/link'
import { useState } from "react";
function NavBar() {
    const [nav, setNav] = useState(false);
    return (
        <header>
            <Navbar bg="light" expand="lg" className="shadow">
                <Container>
                    <Navbar.Brand><Link href="/">Pawna Camp</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" onClick={() => setNav(!nav)}
                        className="btn btn-light border-white collapsed" >
                        {
                            !nav ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                                </svg>
                        }

                    </Navbar.Toggle>
                    <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/mission"><a className="nav-link">Campsite</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/schools"><a className="nav-link">Blogs</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/discussions"><a className="nav-link">About</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/faq"><a className="nav-link">FAQ</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact"><a className="nav-link">Contact</a></Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link href="/login"><a className="nav-link">Login</a></Link>
                            </li> */}
                        </ul>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavBar;