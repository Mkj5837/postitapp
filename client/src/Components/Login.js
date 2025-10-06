import { Link } from "react-router-dom";
import img from "../Images/loginImage.jpg";
import logo from "../Images/logo-t.png";
import { Container, Input, FormGroup, Form, Label, Button } from "reactstrap";
const Login = () => {
  return (
    <>
      <Container>
        <Form className="form-container">
          <img src={logo} className="login-logo" />
          <FormGroup floating>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
            />
            <Label for="exampleEmail">Email</Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Password"
              type="password"
            />
            <Label for="examplePassword">Password</Label>
          </FormGroup>
          <Button
            color="primary"
            type="submit"
            style={{ display: "flex", margin: "auto" }}
          >
            Submit
          </Button>

          <p className="smalltext" style={{ margin: 0, textAlign: "center" }}>
            New user? <Link to="/register">Register here.</Link>
          </p>
        </Form>
      </Container>
    </>
  );
};

export default Login;
