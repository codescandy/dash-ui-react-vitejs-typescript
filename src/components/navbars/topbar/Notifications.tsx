// import node module libraries
import { Fragment } from "react";
import { useMediaQuery } from "react-responsive";

// import data files
// import NotificationList from "data/Notification";
import { NotificationItems } from "data/Notification";

// import hooks
import { useMounted } from "hooks/useMounted";
import { DesktopNotifications } from "./DesktopNotifications";
import { MobileNotifications } from "./MobileNotifications";

const Notifications = () => {
  const hasMounted = useMounted();

  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <Fragment>
      {hasMounted && isDesktop ? (
        <DesktopNotifications data={NotificationItems} />
      ) : (
        <MobileNotifications data={NotificationItems} />
      )}
    </Fragment>
  );
};

export default Notifications;
