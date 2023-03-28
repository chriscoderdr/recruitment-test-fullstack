"use client";
import styles from "./page.module.css";
import { Button } from "@components/app/components/button/button";
import { TextField } from "@components/app/components/text-field/text-field";
import { Form } from "@components/app/components/form/form";
import { authService } from "@components/app/service/auth";
import { useState } from "react";

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    authService.login(username, password).then((res) => {
      if (res.ok) {
        
      }
    }).catch((err) => {
      alert(err);
    });
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
        <Form onSubmit={onSubmit} errors={[{message: 'TEST'}]}>
          <TextField
            type={"text"}
            placeholder={"Username"}
            onChange={onUsernameChange}
          />
          <TextField
            type={"password"}
            placeholder={"Password"}
            onChange={onPasswordChange}
          />
          <Button type="submit" value={"Login"} />
        </Form>
      </div>
    </div>
  );
};
