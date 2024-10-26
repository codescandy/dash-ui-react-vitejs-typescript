import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Badge } from "react-bootstrap";
// import { ChildrenItemProps } from "types";

interface GenerateLinkProps {
  item: {
    link: string;
    badge: string;
    name: string;
    badgecolor: string;
  };
}

export const generateLink = ({ item }: GenerateLinkProps) => {
  const location = useLocation();

  return (
    <Link
      to={item.link}
      className={`nav-link ${location.pathname === item.link ? "active" : ""}`}
    >
      {item.name}
      {item.badge && (
        <Badge className="ms-1" bg={item.badgecolor || "primary"}>
          {item.badge}
        </Badge>
      )}
    </Link>
  );
};
