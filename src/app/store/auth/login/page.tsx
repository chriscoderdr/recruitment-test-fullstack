"use client";
import styles from "./page.module.css";
import { Button } from "@components/app/components/button/button";
import { TextField } from "@components/app/components/text-field/text-field";
import { Form } from "@components/app/components/form/form";
import { authService } from "@components/app/service/auth";
import { useEffect, useState } from "react";
import { FormFieldError } from "@components/app/models/models";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FormFieldError[]>([]);

  const onSubmit = () => {
    resetForm();
    authService
      .login(username, password)
      .then((res) => {
        if (res.ok) {
        } else {
          res.json().then((data) => {
            setErrors(data.errors);
          });
        }
      })
      .catch((err) => {
        setErrors([{ message: err }]);
      });
  };

  const resetForm = () => {
    setErrors([]);
  };

  const onUsernameChange = (value: string) => {
    setUsername(value);
  };

  const onPasswordChange = (value: string) => {
    setPassword(value);
  };

  return (
    <div className={styles.login_container}>
      <div>
        <Form onSubmit={onSubmit} errors={errors}>
          <TextField
            type={"text"}
            placeholder={"Username"}
            onChange={onUsernameChange}
            required
            onBlur={resetForm}
          />
          <TextField
            type={"password"}
            placeholder={"Password"}
            onChange={onPasswordChange}
            required
            onBlur={resetForm}
          />
          <Button type="submit" value={"Login"} />
        </Form>
      </div>
    </div>
  );
};

export default Login;
