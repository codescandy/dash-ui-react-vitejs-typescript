import SimpleBar from "simplebar-react";
import { ListGroup, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "simplebar/dist/simplebar.min.css";
import { NotificationProps } from "types";

interface NotificationListProps {
  notificationItems: NotificationProps[];
}
export const NotificationList: React.FC<NotificationListProps> = ({
  notificationItems,
}) => {
  return (
    <SimpleBar style={{ maxHeight: "300px" }}>
      <ListGroup variant="flush">
        {notificationItems.map(function (item, index) {
          return (
            <ListGroup.Item
              className={index === 0 ? "bg-light" : ""}
              key={index}
            >
              <Row>
                <Col>
                  <Link to="#" className="text-muted">
                    <h5 className=" mb-1">{item.sender}</h5>
                    <p className="mb-0"> {item.message}</p>
                  </Link>
                </Col>
              </Row>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </SimpleBar>
  );
};
