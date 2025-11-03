import { userSchemaValidation } from "../Validations/UserValidations";
import * as yup from "yup";
import { registerUser } from "../Features/UserSlice"; 
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
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

import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser } from "../Features/UserSlice";
import { Link } from "react-router-dom";

//For form validation using react-hook-form
const Register = () => {
  const userList = useSelector((state) => state.users.value);

  //Declare your state variables
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const {
    register,

    handleSubmit, // Submit the form when this is called

    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation), //Associate your Yup validation schema using the resolver
  });

  // Handle form submission
  const dispatch = useDispatch();
  const navigate= useNavigate();

  const onSubmit = (data) => {
    try {
      console.log("Form Data", data);
      alert("Validation all good."); // You can handle the form submission here
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      dispatch(registerUser(userData));
      navigate("/login"); //redirect to login component
      console.log("Added Successfully.")
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (email) => {
    try {
      dispatch(deleteUser(email));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container fluid>
      <Form className="div-form" onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={6}>
            Name<br></br>
            <input
              type="text"
              name="name"
              {...register("name", {
                value: name,
                onChange: (e) => setname(e.target.value),
              })}
            ></input>
            {name}
          </Col>
          <p className="error">{errors.name?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Email<br></br>
            <input
              type="email"
              name="email"
              {...register("email", {
                value: email,
                onChange: (e) => setemail(e.target.value),
              })}
            ></input>
            {email}
          </Col>
          <p className="error">{errors.email?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Password<br></br>
            <input
              type="password"
              name="password"
              {...register("password", {
                value: password,
                onChange: (e) => setpassword(e.target.value),
              })}
            ></input>
            {password}
          </Col>
          <p className="error">{errors.password?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Confirm Password<br></br>
            <input
              type="password"
              name="confirmpassword"
              {...register("confirmPassword", {
                value: confirmPassword,
                onChange: (e) => setconfirmPassword(e.target.value),
              })}
            ></input>
            {confirmPassword}
          </Col>
          <p className="error">{errors.confirmPassword?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            <Button>Register</Button>
          </Col>
        </Row>
      </Form>

    </Container>
  );
};

export default Register;
