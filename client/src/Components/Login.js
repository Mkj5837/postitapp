import loginimage from "../Images/loginImage.jpg";
import "../App.css";
import {
  Button,
  Col,
  Label,
  Container,
  Row,
  FormGroup,
  Input,
  Form,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../Features/UserSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {

const [email, setEmail]=useState();
const [password, setpassword]=useState();

const dispatch=useDispatch(); 
const navigate=useNavigate();

const user = useSelector((state) => state.users.user);
const isSuccess = useSelector((state) => state.users.isSuccess);
const isError= useSelector((state)=state.users.isError);


const handleLogin =()=>{
  try{const userData={
    email,
    password
  }
  console.log(userData);
  dispatch(userLogin(userData));
}catch(error){
    console.log(error); 
  }
  
}
  useEffect(() => {
    if(isSuccess){
    navigate('/');
    }
    if(isError){
      console.log(isError);
      alert("Invalid Login");
      navigate('/login');
    }
    else{
      navigate('/login');
    }
  }, [user,  isError, isSuccess]);


  return (
    <Container>
      <Form>
        <Row>
          <Col md={3}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Enter your Email"
                type="email"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="password"
                name="password"
                placeholder="Enter you password"
                type="password"
                onChange={(e)=>setpassword(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            <Button onClick={()=>handleLogin()}>Login</Button>
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            <p className="smalltext">
              No Account? <Link to="/register">Sign Up now.</Link>
            </p>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Login;
