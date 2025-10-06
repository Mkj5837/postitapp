// import Posts from "./Posts";
// import SharePosts from "./SharePosts";
// import User from "./User";
import { Container, Row, Col } from "reactstrap";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          {/* user component is here. */}
          {/* <User /> */}
        </Col>
        <Col md={9}></Col>
      </Row>
      <Row>
        <Col md={3}></Col>
        <Col md={9}>{/* <Posts /> */}</Col>
      </Row>
    </Container>
  );
};

export default Home;
