// import node module libraries
import { Link } from "react-router-dom";
import { Col, Row, Image } from "react-bootstrap";

const ProfileHeader = () => {
  return (
    <Row className="align-items-center">
      <Col xl={12} lg={12} md={12} xs={12}>
        {/* Bg */}
        <div
          className="pt-20 rounded-top"
          style={{
            background: "url(/images/background/profile-cover.jpg) no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="bg-white rounded-bottom smooth-shadow-sm ">
          <div className="d-flex align-items-center justify-content-between pt-4 pb-6 px-4">
            <div className="d-flex align-items-center">
              {/* avatar */}
              <div className="avatar-xxl avatar-indicators avatar-online me-2 position-relative d-flex justify-content-end align-items-end mt-n10">
                <Image
                  src="/images/avatar/avatar-1.jpg"
                  className="avatar-xxl rounded-circle border border-4 border-white-color-40"
                  alt=""
                />
                <Link
                  to="#!"
                  className="position-absolute top-0 right-0 me-2"
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Verified"
                >
                  <Image
                    src="/images/svg/checked-mark.svg"
                    alt=""
                    height="30"
                    width="30"
                  />
                </Link>
              </div>
              {/* text */}
              <div className="lh-1">
                <h2 className="mb-0">
                  Jitu Chauhan
                  <Link
                    to="#!"
                    className="text-decoration-none"
                    data-bs-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Beginner"
                  ></Link>
                </h2>
                <p className="mb-0 d-block">@imjituchauhan</p>
              </div>
            </div>
            <div>
              <Link
                to="#"
                className="btn btn-outline-primary d-none d-md-block"
              >
                Edit Profile
              </Link>
            </div>
          </div>
          {/* nav */}
          <ul className="nav nav-lt-tab px-4" id="pills-tab" role="tablist">
            <li className="nav-item">
              <Link className="nav-link active" to="#">
                Overview
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Project
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Files
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Teams
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Followers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Activity
              </Link>
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  );
};

export default ProfileHeader;
