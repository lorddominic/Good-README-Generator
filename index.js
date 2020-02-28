const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");
const user = require("./utils/api");

inquirer
    .prompt([{
            message: "Enter your GitHub username",
            name: "username"
        },
        {
            type: "input",
            message: "What is your project title?",
            name: "title"
        },
        {
            type: "input",
            message: "What is the description?",
            name: "description"
        },
        {
            type: "input",
            message: "What is the usage?",
            name: "usage"
        },
        {
            type: "input",
            message: "Installation",
            name: "Installation"
        },
        {
            type: "input",
            message: "License",
            name: "License"
        },
        {
            type: "input",
            message: "Tests",
            name: "Tests"
        },
        {
            type: "input",
            message: "Questions",
            name: "Questions"
        }
    ])
    .then(function(response) {
        const queryUrl = `https://api.github.com/users/${response.username}`;
        axios.get(queryUrl).then(function(res) {
            console.log(res);
            var profile = res.data.avatar_url;
            var email = res.data.email || "no email";
            var name = res.data.name;
            console.log(profile);
            console.log(email);
            fs.writeFile("README.md", markdown(response, profile, email, name), function(err) {
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