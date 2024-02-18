import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Outer from "components/Outer";
import Title from "components/Title";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner"; // Import Spinner component
import { Container, Image, Row } from "react-bootstrap";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CardTitle from "components/CardTitle";
import BodyText from "components/BodyText";
import contact from "../../Asset/images/about/contact.svg";

const ContactUs = () => {
  const form = useRef();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [modalMsg, setmodalMsg] = useState("");
  const [modalType, setmodalType] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    if (
      form.current.user_email.value !== "" ||
      form.current.message.value !== ""
    ) {
      emailjs
        .sendForm(
          "service_jiq4mvj",
          "template_escbdce",
          form.current,
          "BvoQ_6BBNLRNCTRIp"
        )
        .then(
          (result) => {
            console.log(result.text);
            setmodalType("Success!");
            setmodalMsg("Your message has been sent successfully.");
            setShowSuccessModal(true);

            // Reset the form fields
            form.current.user_email.value = "";
            form.current.message.value = "";
          },
          (error) => {
            console.log(error.text);
          }
        )
        .finally(() => {
          setIsSending(false);
        });
    }
    // Handle the case where the form ref is null (if it's not found in the DOM).
    else {
      setIsSending(false);
      setmodalType("Warning!");
      setmodalMsg("Please fill out the form.");
      setShowSuccessModal(true);
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div style={{ backgroundColor: "#EEEEEE" }} id="contact">
      <Container>
        <Outer>
          <Title style={{ color: "rgb(121, 135, 119)" }}>Contact</Title>
          <Row
            xs={1}
            md={2}
            className="g-3"
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <Image src={contact} style={{ maxWidth: "100%" }}></Image>
            </div>
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group className="mb-4">
                <CardTitle style={{ fontSize: "40px" }}>Let's Talk</CardTitle>
              </Form.Group>
              <Form.Group className="mb-3">
                <BodyText>Email</BodyText>
                <Form.Control
                  type="email"
                  name="user_email"
                  className="form-control"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <BodyText>Message</BodyText>
                <Form.Control
                  as="textarea"
                  name="message"
                  className="form-control"
                />
              </Form.Group>
              <Button
                type="submit"
                className="w-100 mt-3"
                style={{
                  backgroundColor: "#798777",
                  borderColor: "#798777",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "20px",
                }}
                disabled={isSending ? true : false}
              >
                {isSending ? ( // Conditionally render a loading spinner while sending
                  <Spinner animation="border" variant="light" size="sm" />
                ) : (
                  "Send Message"
                )}
              </Button>
            </Form>
          </Row>
          <div className="mt-5">
            <a
              href="https://ph.linkedin.com/in/charmaine-manga-66ab29226"
              style={{ textDecoration: "none", color: "inherit" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon
                sx={{
                  fontSize: "3rem",
                  color: "#798777",
                }}
              />
            </a>
            <a
              href="https://github.com/mango20"
              style={{ textDecoration: "none", color: "inherit" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon
                sx={{
                  fontSize: "3rem",
                  marginLeft: "10px",
                  color: "#798777",
                }}
              />
            </a>
          </div>
        </Outer>
      </Container>

      {/* Success Modal */}
      <Modal show={showSuccessModal} onHide={handleCloseSuccessModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalType}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMsg}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSuccessModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContactUs;
