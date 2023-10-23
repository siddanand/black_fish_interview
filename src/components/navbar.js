import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
export default function Navigation() {
  let expand = "sm";
  return (
    <>
      <Navbar key={expand} expand={expand} className="bg-body mb-3">
        <Container>
          <Navbar.Brand
            href="#"
            style={{
              background: "black",
              color: "white",
              fontWeight: "bold",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            Dev
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              {/* <Form.Control
                type="search"
                placeholder="Search"
                className="me-1"
                aria-label="Search"
              /> */}
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Login</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Button variant="outline-success">Create Account</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
