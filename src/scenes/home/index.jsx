import BodyText from "components/BodyText";
import Outer from "components/Outer";
import Title from "components/Title";
import React from "react";
import { Button, Container, Image, Row } from "react-bootstrap";
import About from "scenes/about";
import Achievement from "scenes/achievement";
import Contact from "scenes/contact";
import Education from "scenes/education";
import Experience from "scenes/experience";
import NavHead from "scenes/navbar";
import Project from "scenes/project";
import Skills from "scenes/skills";
import avatar from "../../Asset/images/about/avatar.png";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
function Home() {
  return (
    <div style={{ backgroundColor: "#EEEEEE" }} id="home">
      <Container>
        <div style={{ padding: "65px 0px 75px 0px" }}>
          <Row
            xs={1}
            md={2}
            className="g-3"
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image src={avatar} style={{ padding: "30px" }}></Image>
            <div>
              <h1
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "30px",
                }}
              >
                Hi! I'm
              </h1>
              <h1>
                <h1
                  style={{
                    fontFamily: "Anton, sans-serif",
                    fontSize: "66px",
                    textTransform: "uppercase",
                    margin: "0",
                    color: "#798777",
                  }}
                >
                  Charmaine Lilan Manga
                </h1>
                <h1
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "30px",
                  }}
                >
                  Detail-oriented Frontend Developer with a passion for
                  <span style={{ color: "#798777", fontWeight: "bold" }}>
                    {" "}
                    crafting responsive and visually appealing
                  </span>{" "}
                  web interfaces
                </h1>
              </h1>
              <div className="g-3 mt-4">
                <a
                  href="https://drive.google.com/file/d/1xt4ycG2NrxSFetGW7EspYKXWYQQUB--3/view?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    outline: "none",
                    color: "inherit",
                    display: "table",
                  }}
                >
                  <Button
                    as={BodyText}
                    style={{
                      backgroundColor: "#798777",
                      borderColor: "#798777",
                    }}
                  >
                    Download CV
                  </Button>
                </a>
              </div>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Home;
