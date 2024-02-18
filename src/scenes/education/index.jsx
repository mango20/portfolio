import education from "Asset/data/education";
import CardImg from "components/CardImg";
import Outer from "components/Outer";
import Title from "components/Title";
import React from "react";
import { Container, Image, Row } from "react-bootstrap";

function Education() {
  return (
    <div style={{ backgroundColor: "#EEEEEE" }} id="education">
      <Container>
        <Outer>
          <Title style={{ color: "rgb(121, 135, 119)" }}>Education</Title>
          <Row xs={1} md={2} className="g-3">
            {education.map((val, key) => {
              return (
                <>
                  <CardImg
                    key={key}
                    image={val.image}
                    title={val.title}
                    desc={val.description}
                    date={val.date}
                    border="none"
                  />
                </>
              );
            })}
          </Row>
        </Outer>
      </Container>
    </div>
  );
}

export default Education;
