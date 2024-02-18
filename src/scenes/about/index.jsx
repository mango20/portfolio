import about from "Asset/data/about";
import BodyText from "components/BodyText";
import Outer from "components/Outer";
import Title from "components/Title";
import React from "react";
import { Container, Image, Row } from "react-bootstrap";

function About() {
  return (
    <Container>
      <Outer>
        <Title>About</Title>
        <Row xs={1} md={4} className="g-3">
          {about.map((val, key) => {
            return (
              <>
                <Image
                  src={val.image}
                  style={{
                    objectFit: "cover",
                    borderRadius: "10px",
                    padding: "0px 10px 5px 10px",
                  }}
                ></Image>
              </>
            );
          })}

          <div>
            <BodyText>sdfsad</BodyText>
          </div>
        </Row>
      </Outer>
    </Container>
  );
}

export default About;
