import skills from "Asset/data/skills";
import Outer from "components/Outer";
import SkillCard from "components/SkillCard";
import Title from "components/Title";
import React from "react";
import { Container, Image, Row } from "react-bootstrap";

function Skills() {
  return (
    <div id="skills">
      <Container>
        <Outer bgcolor="white">
          <Title style={{ color: "rgb(121, 135, 119)" }}>Skills</Title>
          <Row xs={1} md={2} className="g-3">
            {skills.map((val, key) => {
              return (
                <>
                  <SkillCard
                    key={key}
                    title={val.title}
                    desc={val.list.toString().split(",").join(" - ")}
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

export default Skills;
