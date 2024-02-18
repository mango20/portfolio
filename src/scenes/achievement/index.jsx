import Outer from "components/Outer";
import InfoOnly from "components/InfoOnly";
import Title from "components/Title";
import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import achievement from "Asset/data/achievement";
import achievementPics from "Asset/data/achievementPics";

function Achievement() {
  return (
    <div style={{ backgroundColor: "#FAF3E0" }} id="achievement">
      <Container>
        <Outer>
          <Title style={{ color: "rgb(121, 135, 119)" }}>Achievement</Title>
          <Carousel>
            {achievementPics.map((val, key) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block"
                    style={{
                      width: "100%",
                      height: "600px",
                      objectFit: "contain",
                      backgroundColor: "gray",
                    }}
                    src={val.image}
                    alt={val.image}
                  />
                  <Carousel.Caption>
                    <p>{val.desc}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
          <Outer>
            <Row xs={1} md={1} className="gx-5" style={{ textAlign: "center" }}>
              {achievement.map((val, key) => {
                return (
                  <InfoOnly
                    link={val.link}
                    key={key}
                    title={val.title}
                    date={val.date}
                  />
                );
              })}
            </Row>
          </Outer>
        </Outer>
      </Container>
    </div>
  );
}

export default Achievement;
