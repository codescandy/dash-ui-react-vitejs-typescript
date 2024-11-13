// import node module libraries
import { Col, Row, Container } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import {
  AboutMe,
  ActivityFeed,
  MyTeam,
  ProfileHeader,
  ProjectsContributions,
  RecentFromBlog,
} from "sub-components";

const Profile = () => {
  return (
    <Container fluid className="p-6">
      <PageHeading heading="Overview" />

      <ProfileHeader />

      <div className="py-6">
        <Row>
          <AboutMe />
          <ProjectsContributions />
          <RecentFromBlog />

          <Col xl={6} lg={12} md={12} xs={12} className="mb-6">
            <MyTeam />
            <ActivityFeed />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Profile;
