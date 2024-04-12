#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 65000;
let id = await inquirer.prompt([
    {
        type: "input",
        name: "id",
        message: "Enter your id",
    },
]);
let pin = await inquirer.prompt([
    {
        type: "number",
        name: "pin",
        message: "Enter your pin",
    },
]);
if (id && pin) {
    console.log("Your balance " + myBalance);
    let operations = await inquirer.prompt([
        {
            type: "list",
            name: "operation",
            message: "Select your operation",
            choices: ["withdraw", "fastcash"],
        },
    ]);
    if (operations.operation === "withdraw") {
        let withdraw = await inquirer.prompt([
            {
                name: "withdraw",
                message: "Enter Amount",
                type: "number",
            },
        ]);
        myBalance = myBalance - withdraw.withdraw;
        console.log(`withdrawl succesfull ${withdraw.withdraw}`);
        console.log("your remaining balance " + myBalance);
    }
    else if (operations.operation === "fastcash") {
        let fastcash = await inquirer.prompt([
            {
                name: "fastcash",
                message: "Select Amount",
                type: "list",
                choices: [500, 1000, 2000, 3000, 4000],
            },
        ]);
        myBalance = myBalance - fastcash.fastcash;
        console.log(`fastcash succesfull ${fastcash.fastcash}`);
        console.log("your remaining balance " + myBalance);
    }
    else if (id || pin === false) {
        console.log("incorrect pin");
    }
}
