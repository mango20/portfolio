import CardImg from "components/CardImg";
import React, { useEffect, useState } from "react";
import Outer from "components/Outer";
import { Container, Row } from "react-bootstrap";
import Title from "components/Title";
import project from "Asset/data/project";

function Project() {
  return (
    <div id="project">
      <Container>
        <Outer bgcolor="white">
          <Title style={{ color: "rgb(121, 135, 119)" }}>Projects</Title>
          <Row xs={1} md={1} className="g-3">
            {project.map((val, key) => {
              return (
                <a
                  key={key}
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
                  <CardImg
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

export default Project;
