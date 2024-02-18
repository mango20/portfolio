import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import BodyText from "./BodyText";
import CardTitle from "./CardTitle";

const CardImg = ({
  desc,
  image,
  title,
  date,
  tools,
  maxH,
  bgColor,
  role,
  border,
  titleColor,
}) => {
  return (
    <>
      <Col>
        <Card
          className="mb-1"
          style={{
            width: "100%",
            border: border,
            backgroundColor: "rgba(0, 0, 0, 0)",
          }}
        >
          <div className="row no-gutters">
            <div className="col-md-5">
              <Card.Img
                src={image}
                className="card-img"
                alt="..."
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  backgroundColor: bgColor,
                  padding: "10px 0px 10px 10px",
                }}
              />
            </div>
            <div className="col-md-7">
              <Card.Body>
                <CardTitle
                  style={{
                    margin: "0 0 2px 0",
                    fontFamily: "Anton, sans-serif",
                    textTransform: "uppercase",
                    color: titleColor,
                  }}
                >
                  {title}
                </CardTitle>
                {!role ? null : (
                  <BodyText
                    style={{
                      fontWeight: "bold",
                      fontSize: "17px",
                    }}
                  >
                    {role}
                  </BodyText>
                )}
                <Card.Text
                  style={{
                    fontSize: "15px",
                    color: "gray",
                    margin: "10px 0 15px 0",
                  }}
                >
                  {date}
                </Card.Text>
                <BodyText
                  style={{
                    textAlign: "justify",
                    minHeight: maxH,
                  }}
                >
                  {desc}
                </BodyText>
                {!tools ? null : (
                  <Card.Footer
                    variant={BodyText}
                    className="text-muted mt-auto"
                    style={{}}
                  >
                    {tools.toString().replaceAll(",", " / ")}
                  </Card.Footer>
                )}
              </Card.Body>
            </div>
          </div>
        </Card>
      </Col>
    </>
  );
};

export default CardImg;
