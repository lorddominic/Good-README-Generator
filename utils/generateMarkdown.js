function generateMarkdown(data, profile, email, name) {
    return `   
    # My bio 
    ${name}
    ## Bio Image
    ![GitHub Logo](${profile}) 
    ## Email 
    ${email}
    ## Project name:
    ${data.title}
    ## Description
    ${data.description}
    ## Installation
    ${data.Installation}
    ## Usage
    ${data.usage}
    ## License 
    ${data.License}
    ## Tests 
    ${data.Tests}
    ## Questions
    ${data.Questions} 
    `;
}

module.exports = generateMarkdown;