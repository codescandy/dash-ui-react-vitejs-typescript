//import node module libraries
import { useContext } from "react";
import { AccordionContext, useAccordionButton } from "react-bootstrap";
import { Link } from "react-router-dom";

interface CustomToggleProps {
  children: React.ReactNode;
  eventKey: any;
}

export const CustomToggleLevelTwo: React.FC<CustomToggleProps> = ({
  children,
  eventKey,
}) => {
  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );
  const isCurrentEventKey = activeEventKey === eventKey;
  return (
    <Link
      to="#"
      className="nav-link "
      onClick={decoratedOnClick}
      data-bs-toggle="collapse"
      data-bs-target="#navDashboard"
      aria-expanded={isCurrentEventKey ? true : false}
      aria-controls="navDashboard"
    >
      {children}
    </Link>
  );
};
