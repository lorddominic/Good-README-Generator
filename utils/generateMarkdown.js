function generateMarkdown(data, profile, email, name) {
    return `   
 # My bio 
 ${name}
 ## Bio Image
 ![GitHub-med](${profile}) 
 ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
 
 
 ## Table of Contents:
 - [Project-name](#Project-name)
 - [Description](#Description)
 - [Test](#Test)
 - [Install-Dependencies](#Install-Dependencies)
 - [Email](#Email)
 
 - [Usage](#Usage)
 - [Questions](#Questions)
 
 ## Project Name:
 ${data.title}

 ## Description
 ${data.description}
 ## Test: 
 \`${data.Tests}\`
 ## Install Dependencies
 ${data.Installation}
 ## Email 
 ${email}
 ## Usage
 ${data.usage}
 ## Questions
 ${data.Questions} 
`;
}

module.exports = generateMarkdown;