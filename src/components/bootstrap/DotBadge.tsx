// /***************************
// Component : DotBadge
// ****************************

// Availalble Parameters

// bg: Optional ( default = primary ), possible bg options are, primary, light-primary, secondary,  light-secondary etc...

// */

// import node module libraries
import { Badge } from "react-bootstrap";

interface DotBadgeProps {
  bg?: string;
  className?: string;
  children: React.ReactNode;
}

export const DotBadge: React.FC<DotBadgeProps> = ({
  bg = "light-primary",
  className = "me-2",
  children,
}) => {
  return (
    <span className={className}>
      <Badge bg={bg} className="badge-dot"></Badge> {children}
    </span>
  );
};


