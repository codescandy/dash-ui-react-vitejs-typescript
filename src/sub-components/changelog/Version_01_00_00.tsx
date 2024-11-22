// import node module libraries
import { Col, Row, Card } from "react-bootstrap";

const Version_01_00_00 = () => {
  return (
    <Row>
      <Col lg={7} md={12} sm={12}>
        <Card>
          <Card.Body>
            <Row className="g-0">
              <Col lg={3} md={4} sm={12}>
                <div id="initial">
                  <h5 className="mb-3 fwsemi--bold">
                    <code>v1.0.0</code> - November 21, 2024
                  </h5>
                </div>
              </Col>
              <Col lg={9} md={8} sm={12}>
                <div>
                  <h4 className="mb-1 fw-semi-bold">
                    Initial Release of React Dash UI with Vitejs and TypeScript
                  </h4>
                  <p className="mb-0">
                    Dash UI theme is a fully responsive and yet modern premium
                    bootstrap dashboard Admin template developed in vitals
                    framework using typescript.
                  </p>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Version_01_00_00;
