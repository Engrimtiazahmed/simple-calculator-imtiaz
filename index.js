#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        massage: "Please Enter first number:",
        name: "firstNumber",
        type: "number",
    },
    {
        massage: "Please Enter Second number:",
        name: "secondNumber",
        type: "number",
    },
    {
        massage: "Please sellect one of the operator to perform action:",
        name: "operator",
        type: "list",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Substraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please sellect valid operator to perform action");
}
