import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../.././images/logo.jpg";
import Validate from "./LoginValidate";

const ImageWrapper = styled.img`
  margin: 10px 0;
  width: 70px;
`;
const LoginHeader = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px, 0;
  box-sizing: border-box;

  display: flex;
  justify-content: center;

  .Login {
    width: 100%;
    margin-top: 20px;
    max-width: 450px;
    border: 2px solid lightgrey;
    padding: 30px;
  }
`;
const FormWrapper = styled.div`
  .error {
    color: #545a8f;
  }

  .form-signup {
    margin-top: 50px;
    font-weight: bold;
    font-size: 18px;
    color: #545a8f;
    text-align: center;
    text-decoration: none;
  }
`;
const BoldLink = styled.a`
  margin-top: 50px;
  font-size: 22px;
  font-weight: bolder;
  text-decoration: none;
`;
const FormItem = styled.div`
  width: 100%;
  margin: 10px 0;

  input {
    margin-top: 5px;
    box-sizing: border-box;
    width: 100%;

    height: 30px;
    border: none;
    border-bottom: 1px solid #490dd4;

    &:focus {
      outline: none;
    }
  }
`;

const FormButton = styled.div`
  width: 100%;

  button {
    margin-top: 10px;
    width: 100%;
    padding: 10px 0;
    background: #545a8f;
    border: none;
    color: white;

    font-weight: bold;
  }
`;

const LoginFormHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, values } = e.target;
    setValues({
      ...values,
      [name]: values,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validate(values));
  };
  return (
    <LoginHeader>
      <div className="Login">
        <LoginFormHeader>
          <ImageWrapper src={Logo} alt="Logo" />
        </LoginFormHeader>

        <FormWrapper onSubmit={handleSubmit}>
          <label>Username</label>
          <div className="login">
            <FormItem>
              <input
                required
                placeholder="username"
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
              />
            </FormItem>
            {errors.username && <p className="error">{errors.username}</p>}
            <FormItem>
              <label>Password</label>
              <input
                required
                placeholder="password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </FormItem>
            {errors.password && <p className="error">{errors.password}</p>}
            <FormButton>
              <button type="btnSubmit" className="btn">
                LogIn
              </button>
            </FormButton>
          </div>
          <span className="form-signup">
            Do not have an account? Create an account
            <BoldLink href="#">SignUP</BoldLink>
          </span>
        </FormWrapper>
      </div>
    </LoginHeader>
  );
};

export default Login;
