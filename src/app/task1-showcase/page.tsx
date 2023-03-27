import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { arrayUtils } from "../utils/arrayUtils";

const inter = Inter({ subsets: ["latin"] });

export default async function DogBreeds() {
  const testData = [
    "n",
    "2",
    "&",
    "a",
    "l",
    "9",
    "$",
    "q",
    "47",
    "i",
    "a",
    "j",
    "b",
    "z",
    "%",
    "8",
  ];

  const result = arrayUtils.sortExcludingSpecialChars(testData, true);
  return (
    <main className={inter.className}>
      <div className={styles.main}>
        <div className={styles.title_container}>
          <h1>Task 1 showcase</h1>
          <p>
            From the following array, reverse it, but keep the special
            characters in the same position.
            <br />
            <code>[n,2,&,a,l,9,$,q,47,i,a,j,b,z,%,8] </code>
            <br />
            In this case: - `&` must be in position 2 - `$` must be in position
            6 - `%` must be in position 14 The solution needs to be dynamic (if
            the special character's position changed, keep it as same).
          </p>
          <div className={styles.sections}>
            <div className={styles.section}>
              <h2>Result</h2>
              {JSON.stringify(result)}
            </div>
            <div className={styles.section}>
              <h2>Notes</h2>
              <p>
                This task is available on CLI to run it execute:
                <br />
                <code>npm run task1</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
