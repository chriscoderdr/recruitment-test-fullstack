"use client";
import styles from "./page.module.css";
import { Button } from "@components/app/components/button/button";
import { TextField } from "@components/app/components/text-field/text-field";
import { Form } from "@components/app/components/form/form";
import { authService } from "@components/app/service/auth";
import { useState } from "react";
import { FormFieldError } from "@components/app/models/models";

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FormFieldError[]>([]);

  const onSubmit = () => {
    authService.login(username, password).then((res) => {
      if (res.ok) {
        
      } else {
        setErrors([{message: res.statusText }]);
      }
    }).catch((err) => {
      setErrors([{message: err }]);
    });
  };

  const resetForm = () => {
    setErrors([]);
  }

  const onUsernameChange = (value: string) => {
    setUsername(value);
    resetForm();
  };

  const onPasswordChange = (value: string) => {
    setPassword(value);
    resetForm();
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
          />
          <TextField
            type={"password"}
            placeholder={"Password"}
            onChange={onPasswordChange}
            required
          />
          <Button type="submit" value={"Login"} />
        </Form>
      </div>
    </div>
  );
};
