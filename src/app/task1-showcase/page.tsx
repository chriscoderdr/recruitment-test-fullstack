"use client";

import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { arrayUtils } from "../utils/arrayUtils";
import { useState } from "react";
import { Button } from "../components/button/button";

const inter = Inter({ subsets: ["latin"] });

export default function Task1ShowCase() {
  const [dynamicDataResult, setDynamicDataResult] = useState();
  const [fields, setFields] = useState({});
  const [fieldsCount, setFieldsCount] = useState(0);
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

  const onAddField = () => {
    console.log(fieldsCount);
    setFieldsCount(fieldsCount + 1);
  };

  const onFieldChange = (index: number, value: string) => {
    setFields({
      ...fields,
      [index]: value,
    });
  };

  const onRun = () => {
    console.log(fields);
    const dynamicData = Object.values(fields);
    const result = arrayUtils.sortExcludingSpecialChars(dynamicData, true);
    setDynamicDataResult(result);
  };

  const fieldsArray = [...Array(fieldsCount)];

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

          <div></div>
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
              <p>
                Tests for this task can be run with:
                <br />
                <code>npm run tests</code>
              </p>
            </div>
            <div className={styles.section}>
              <h2>Run online</h2>
              <div>
                <div>
                  <Button value={"Add input"} onClick={onAddField} />
                  <Button value={"Run"} onClick={onRun} />
                </div>
                <br />
                <h3>Result</h3>
                {JSON.stringify(dynamicDataResult)}
                <br />
                <h3>Input</h3>
                {fieldsArray.length > 0
                  ? fieldsArray.map((_, index) => {
                      return (
                        <input
                          className={styles.runner_input}
                          key={index + ""}
                          type="text"
                          maxLength={1}
                          placeholder={"Char" + (index + 1)}
                          onChange={(event) =>
                            onFieldChange(index, event.target.value)
                          }
                        />
                      );
                    })
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
