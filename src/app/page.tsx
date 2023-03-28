import styles from "./page.module.css";

export default async function Home() {
  const dogs = (await (await fetch("http://localhost:3000/api/dogs")).json())
    .data;
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
