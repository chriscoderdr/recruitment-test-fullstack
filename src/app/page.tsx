"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { urlUtil } from "./utils/urlUtil";

export default function Home() {
  const [dogs, setDogs] = useState();
  useEffect(() => {
    fetch(urlUtil.getFullPath("/api/dogs"))
      .then(async (res) => {
        const data = (await res.json()).data;
        if (res.ok && data) {
          setDogs(data);
        }
      })
      .catch((e: any) => {
        console.log(e.message);
      });
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.title_container}>
        <h1>Tasks</h1>
      </div>
      <ul className={styles.menu}>
        <li>
          <a href="/task1-showcase">Task 1</a>
        </li>
        <li>
          <a href="/dog-breeds">Task 2</a>
        </li>
        <li>
          <a href="/store/admin">Task 3 - Form</a>
        </li>
        <li>
          <a href="/store">Task 3 - Carousel</a>
        </li>

        <li>
          <a href="/store/auth/login">Task 3 - Login</a>
        </li>
      </ul>
    </main>
  );
}
