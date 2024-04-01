#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlueBright("******Welcome To My ToDos App******"));
let todos = [];
async function makeTodos(arr) {
    do {
        let ans = await inquirer.prompt([
            {
                type: "list",
                message: chalk.gray("***Please Select operation"),
                name: "select",
                choices: ["Add", "Update", "View", "Delete", "Exit"]
            }
        ]);
        if (ans.select == "Add") {
            let makeTodos = await inquirer.prompt([
                {
                    type: "input",
                    message: chalk.green("***What do yo want to add in your Todo"),
                    name: "todo"
                }
            ]);
            arr.push(makeTodos.todo);
            console.log(arr);
        }
        if (ans.select == "Update") {
            let updateTodo = await inquirer.prompt([
                {
                    type: "list",
                    message: chalk.gray("***Select Item For Update***"),
                    name: "todo",
                    choices: todos.map(item => item)
                }
            ]);
            let addTodo = await inquirer.prompt([
                {
                    type: "input",
                    message: chalk.greenBright("***Add Item For Update"),
                    name: "todo",
                }
            ]);
            let newTodos = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodos, addTodo.todo];
            console.log(todos);
        }
        if (ans.select == "View") {
            console.log(todos);
        }
        if (ans.select == "Delete") {
            let deleteTodo = await inquirer.prompt([
                {
                    type: "list",
                    message: chalk.green("***Select Item For Delete"),
                    name: "todo",
                    choices: todos.map(item => item)
                }
            ]);
            let newTodos = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodos];
            console.log(todos);
        }
        if (ans.select == "Exit") {
            console.log(chalk.bgBlueBright("****Thank you****"));
        }
    } while (true);
}
makeTodos(todos);
