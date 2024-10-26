//import node module libraries
import { useContext } from "react";
import { useAccordionButton, AccordionContext } from "react-bootstrap";
import { Link } from "react-router-dom";

interface CustomToggleProps {
  children: React.ReactNode;
  eventKey: any;
  icon: any;
}

export const CustomToggle: React.FC<CustomToggleProps> = ({
  children,
  eventKey,
  icon,
}) => {
  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );
  const isCurrentEventKey = activeEventKey === eventKey;
  return (
    <li className="nav-item">
      <Link
        to="#"
        className="nav-link "
        onClick={decoratedOnClick}
        data-bs-toggle="collapse"
        data-bs-target="#navDashboard"
        aria-expanded={isCurrentEventKey ? true : false}
        aria-controls="navDashboard"
      >
        {icon ? <i className={`nav-icon fe fe-${icon} me-2`}></i> : ""}{" "}
        {children}
      </Link>
    </li>
  );
};
