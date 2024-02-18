import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import BodyText from "./BodyText";
import CardTitle from "./CardTitle";

const InfoOnly = ({ desc, title, date, link, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Col
        style={{
          width: "100%",
          border: "none",
          backgroundColor: "rgba(0, 0, 0, 0)",
        }}
      >
        <Card
          className="mb-1"
          style={{
            width: "100%",
            border: "none",
            backgroundColor: "rgba(0, 0, 0, 0)",
          }}
        >
          <div className="row">
            <Card.Body>
              <a
                href={link}
                style={{
                  textDecoration: isHovered && link ? "underline" : "none",
                  color: "inherit",
                }}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <CardTitle
                  style={{
                    margin: "0 0 2px 0",
                    fontFamily: "Anton, sans-serif",
                    textTransform: "uppercase",
                    color: color,
                  }}
                >
                  {title}
                </CardTitle>
              </a>

              <Card.Text
                style={{
                  fontSize: "15px",
                  color: "gray",
                  margin: "0 0 15px 0",
                }}
              >
                {date}
              </Card.Text>
              <BodyText
                style={{
                  textAlign: "justify",
                  color: "#798777",
                }}
              >
                {desc}
              </BodyText>
            </Card.Body>
          </div>
        </Card>
      </Col>
    </>
  );
};

export default InfoOnly;
