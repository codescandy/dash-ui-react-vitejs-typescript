// import node module libraries
import { Fragment } from "react";
import { Col, Row, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

// import custom hook
import { useMounted } from "hooks/useMounted";

const NotFound = () => {
  const hasMounted = useMounted();
  return (
    <Fragment>
      {hasMounted && (
        <Container>
          <Row>
            <Col sm={12}>
              <div className="text-center">
                <div className="mb-3">
                  <Image
                    src="/images/error/404-error-img.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <h1 className="display-4 fw-bold">Oops! the page not found.</h1>
                <p className="mb-4">
                  Or simply leverage the expertise of our consultation team.
                </p>
                <Link to="/" className="btn btn-primary">
                  Go Home
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </Fragment>
  );
};

export default NotFound;
