import { userSchemaValidation } from "../Validations/UserValidations";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resover: yupResolver(userSchemaValidation) });

  const onSubit = (data) => {
    console.log("Form Data", data);
  };
  return <h1>Register</h1>;
};
export default Register;
