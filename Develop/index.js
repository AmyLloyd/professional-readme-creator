// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = ["What is your name?", "What is your gitHub username?", "Which languages are you proficient in?", "What are your strengths as a developer?", "What are your strengths as a team member?", "What do you want to achieve in your work?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init(questions) {
    inquirer
    .createPromptModule([
        for (i = 0; i < questions.length; i++) {
            type: "input",
            message: `${questions[i]}`
            name: 
        }
        {
            type:"input",
            message: questions,
            name: "name",
        },

    ])
    .then((response)) => {
        let response = JSON.stringify(response);
        console.log(response);


    }
}

// Function call to initialize app
init();
