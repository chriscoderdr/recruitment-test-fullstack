"use client";
import styles from "./page.module.css";
import { Inter } from "next/font/google";
import { Button } from "@components/app/components/button/button";
import { TextField } from "@components/app/components/text-field/text-field";
import { Form } from "@components/app/components/form/form";

const inter = Inter({ subsets: ["latin"] });

export default () => {
  const onSubmit = () => {};

  return (
    <div className={styles.login_container}>
      <div>
        <Form onSubmit={onSubmit}>
          <TextField type={"text"} placeholder={"Username"} />
          <TextField type={"password"} placeholder={"Password"} />
          <Button type="submit" value={"Login"} />
        </Form>
      </div>
    </div>
  );
};
