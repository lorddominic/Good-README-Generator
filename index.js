const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");


inquirer
    .prompt([{
            message: "Enter your GitHub username",
            name: "username"
        },
        {
            type: "input",
            message: "What is your project's name?",
            name: "title"
        },
        {
            type: "list",
            message: "Which license do you want to see?",
            name: "license",
            choices: [
                "BSD3",
                "MIT",
                "Apache 2.0",
                "None"
            ]
        },
        {
            type: "input",
            name: "test",
            message: "What command should be run to run tests?"
        },
        {
            type: "input",
            name: "dependencies",
            message: "What command should be run to install dependencies?"
        },
        {
            type: "input",
            name: "repo",
            message: "What does the user need to do with the repo?"
        },
        {
            type: "input",
            message: "Write a description of your project?",
            name: "description"
        },
        {
            type: "input",
            message: "What is the usage?",
            name: "usage"
        },
        {
            type: "input",
            name: "questions",
            message: "Any other questions? Let me know."
        }

    ])
    .then(function(response) {
        const queryUrl = `https://api.github.com/users/${response.username}`;
        axios.get(queryUrl).then(function(res) {
            console.log(res);
            var profile = res.data.avatar_url;
            var email = res.data.email || "dominictxu1@gmail.com";
            var name = res.data.name;
            console.log(profile);
            console.log(email);
            fs.writeFile("GenerateREADME.md", markdown(response, profile, email, name), function(err) {
                if (err) {
                    return console.log(err);
                }
                console.log("success");
            });
        })
    });

// function init() {

// }

// init();