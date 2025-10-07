import loginImage from "../Images/loginImage.jpg";
import { userSchemaValidation } from "../Validations/UserValidations";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, userSelector } from "react-redux";
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
import logo from "../Images/logo-t.png";
import { useState } from "react";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchemaValidation) });

  //useSelector is a hook that allows you to extract data from the Redux store state, using a selector function.
const userList = useSelector((state)=>state.users.value);//(this fetches data)you can put this anywhere, as long as its before the reurn statement.

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form Data", data); // You can handle the form submission here
  };

  //use state variables
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmpassword,setConfirmPassword]=useState("");  

  return (
    <Container fluid >
      <h1>Register</h1>
      <Form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <Row>
          <Col md={6}>
            Name<br></br>
            <input type="text" name="name" 
            {...register("name",{value:  name, onChange:(e)=>setName(e.target.value)})}></input>
          </Col>
          <p className="error">{errors.name?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Email<br></br>
            <input type="email" name="email" 
            {...register("email",{value: email, onChange: (e)=>setEmail(e.target.value)})}></input>
          </Col>
          <p className="error">{errors.email?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Password<br></br>
            <input
              type="password"
              name="password"
              {...register("password", {value: password, onChange: (e)=>setPassword(e.target.value)

              })}
            ></input>
          </Col>
          <p className="error">{errors.password?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Confirm Password<br></br>
            <input
              type="password"
              name="confirmpassword"
              {...register("confirmPassword", {value: confirmpassword, onChange: (e)=>setConfirmPassword(e.target.value)})}
            ></input>
          </Col>
          <p className="error">{errors.confirmPassword?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            <Button>Register</Button>
          </Col>
        </Row>
      </Form>
      <Row>
        <Col md={6}>
          <h1>List of users</h1>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user)=>(
                <tr key={user.email}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td><Button className="btn btn-warning">Update</Button></td><td><Button className="btn btn-danger">Delete</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;