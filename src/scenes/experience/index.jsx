import Outer from "components/Outer";
import InfoOnly from "components/InfoOnly";
import Title from "components/Title";
import React from "react";
import { Container, Row } from "react-bootstrap";
import experience from "Asset/data/experience";

function Experience() {
  return (
    <div id="experience">
      <Container>
        <Outer>
          <Title color="#798777">Experience</Title>
          <Row xs={1} md={2} className="gx-5">
            {experience.map((val, key) => {
              return (
                <a
                  href={val.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    outline: "none",
                    color: "inherit",
                    display: "table",
                  }}
                >
                  <InfoOnly
                    maxH="120px"
                    role={val.role}
                    key={key}
                    image={val.image}
                    title={val.title}
                    desc={val.description}
                    date={val.date}
                    tools={val.platform}
                  />
                </a>
              );
            })}
          </Row>
        </Outer>
      </Container>
    </div>
  );
}

export default Experience;
