import { Label } from "reactstrap";
import { Button, Col, Container, Row, FormGroup, Input } from "reactstrap";

const SharePosts = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Input
            id="share"
            name="share"
            type="textarea"
            placeholder="Share your thoughts..."
          />
          <Button color="primary" style={{ marginTop: "10px" }}>
            Post It
          </Button>
        </Col>
      </Row>
      <h1>SharePosts</h1>
    </Container>
  );
};

export default SharePosts;
