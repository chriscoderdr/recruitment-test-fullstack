import { arrayUtils } from "./util/arrayUtils";

const task1 = () => {
  console.log("Task 1");
  printSeparationLine();
  console.log(`
  From the following array, reverse it, but keep the special characters in the same position.
  [n,2,&,a,l,9,$,q,47,i,a,j,b,z,%,8]
  In this case:
  
  & must be in position 2
  $ must be in position 6
  % must be in position 14
  The solution needs to be dynamic (if the special character's position changed, keep it as same).
  `);
  const data = [
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
  const result = arrayUtils.sortExcludingSpecialChars(data, true);
  console.log("result", result);
};

const printSeparationLine = () => {
  console.log("--------------------------------------------");
};

const executeAllTasks = () => {
  task1();
};

executeAllTasks();
