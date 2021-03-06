function generateMarkdown(data, profile, email, name) {
    return `   
 # My bio 
 ${name}
 ## Bio Image
 ![gitHub-med](${profile}) 
 ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
 ## Project Name:
 ${data.title}
 
 ## Table of Contents:
 - [Description](#Description)
 - [Test](#Test)
 - [Install-Dependencies](#Install-Dependencies)
 - [Repository](#Repository)
 - [Email](#Email)
 - [Usage](#Usage)
 - [Questions](#Questions)
 
 ## Description:
 ${data.description}
 ## Test: 
 \`${data.test}\`
 ## Install Dependencies:
 \`${data.dependencies}\`
 ## Repository: 
 ${data.repo}
 ## Email:
 ${email}
 ## Usage:
 ${data.usage}
 ## Questions:
 ${data.questions} 

`;
}

module.exports = generateMarkdown;