#! /usr/bin/env node

import inquirer from "inquirer";
// todos array
// todos function
//todos operation
let todos : string [] = ["Fiza","Habiba","abuBakar","umarFarooq"]
 


async function creatTodo(todos:string[]){

    do {
        
    let ans = await inquirer.prompt(
        [
            {
                name: "select",
                type: "list",
                message: "select an operation",
                choices: ["add","update","view","delet"]
            }
        ]
    );
    if (ans.select === "add") {
        let addTodo = await inquirer.prompt(
            [
                {
                    name: "todo",
                    type: "input",
                    message: "Add Item",


                }
            ]
        )
        todos.push(addTodo.todo);
        console.log(todos);
        
    };
    if (ans.select === "update") {
       let updateTodo = await inquirer.prompt (
        [
            { 
                name: "todo",
                type: "list",
                message: "select an Item for the update",
                choices: todos.map(item => item)
            }
        ]
       ) ;
       let addTodo = await inquirer.prompt(
        [
            {
                name: "todo",
                type: "input",
                message: "Add Item",


            }
        ]
    )
    let newTodos = todos.filter(val => val !== updateTodo.todo)
    todos = [...newTodos,addTodo.todo]
    console.log(todos);
    
    }
    if (ans.select === "view") {
       console.log(todos);
        
    }
    if (ans.select === "delet") {
        let deletTodo = await inquirer.prompt (
            [
                { 
                    name: "todo",
                    type: "list",
                    message: "select an Item for the update",
                    choices: todos.map(item => item)
                }
            ]
           ) ;  
           let newTodos = todos.filter(val => val !== deletTodo.todo)
           todos = [...newTodos]
           console.log(todos);
           
    }
    } while (true);

}
creatTodo(todos);