import styles from "./page.module.css";
import { Inter } from "next/font/google";
import { Button } from "@components/app/components/button/button";
import { TextField } from "@components/app/components/text-field/text-field";

const inter = Inter({ subsets: ["latin"] });

export default () => {
  return (
    <div className={styles.login_container}>
      <div>
        <TextField type={"text"} placeholder={"Username"} />
        <TextField type={"password"} placeholder={"Password"} />
        <Button value={"Login"} />
      </div>
    </div>
  );
};
