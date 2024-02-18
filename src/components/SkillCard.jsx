import { display } from "@mui/system";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import BodyText from "./BodyText";
import CardTitle from "./CardTitle";

const SkillCard = ({ desc, title }) => {
  return (
    <>
      <Col>
        <Card style={{ textAlign: "center" }}>
          <Card.Body>
            <CardTitle style={{ textTransform: "uppercase" }}>
              {title}
            </CardTitle>
            <Card.Text as={BodyText}>{desc}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SkillCard;
