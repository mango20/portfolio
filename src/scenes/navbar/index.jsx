import BodyText from "components/BodyText";
import CardTitle from "components/CardTitle";
import {
  Card,
  CardGroup,
  Col,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";

function NavHead() {
  const contact = () => {
    document.getElementById("contact").scrollIntoView();
  };

  const home = () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  };
  const experience = () => {
    document
      .getElementById("experience")
      .scrollIntoView({ behavior: "smooth" });
  };

  const achievement = () => {
    document
      .getElementById("achievement")
      .scrollIntoView({ behavior: "smooth" });
  };

  const education = () => {
    document.getElementById("education").scrollIntoView({ behavior: "smooth" });
  };

  const project = () => {
    document.getElementById("project").scrollIntoView({ behavior: "smooth" });
  };

  const skills = () => {
    document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        sticky="top"
        style={{ backgroundColor: "white", cursor: "pointer" }}
      >
        <Container>
          <Navbar.Brand
            href="#home"
            as={CardTitle}
            style={{ color: "#798777" }}
          >
            CLQM
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end flex-grow-1">
              <Nav.Link onClick={home} as={BodyText}>
                Home
              </Nav.Link>
              <Nav.Link onClick={education} as={BodyText}>
                Education
              </Nav.Link>
              <Nav.Link onClick={experience} as={BodyText}>
                Experience
              </Nav.Link>
              <Nav.Link onClick={achievement} as={BodyText}>
                Achievement
              </Nav.Link>
              <Nav.Link onClick={skills} as={BodyText}>
                Skills
              </Nav.Link>
              <Nav.Link onClick={project} as={BodyText}>
                Project
              </Nav.Link>
              <Nav.Link onClick={contact} as={BodyText}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavHead;
