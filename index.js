
const inquirer = require('inquirer')
const fs = require('fs')
const generateReadme = (github, email, title, description, install, usage, license, test, contributions) =>
`# ${title}
## Description
>**${description}**
## Table of Content
- Installation

- Usage

- License 

- Contributions: 

- Table of Contents

- Test

- Questions

## Installation
To install necessary dependencies, run the following command:

>**${install}**

## Usage
>**${usage}**

## License
>**${license}** 

## Contributing
>**${contributions}** 

## Test
To run a test run the following command:

>**${test}**

## questions
 If you have any questions about the Repo, open an issue or contact me directly at <!--${email}-->. you can find more of my work at <!--${github}-->.` 



inquirer.prompt([
    { type: 'input', 
      name: 'github',
      message: 'what is your Github Username?'},

    {type:'input', 
    name: 'email', 
    message: 'What is your email address?'},

    {type:'input', 
    name: 'title', 
    message: 'What is your Project name?'},

    {type:'input', 
    name: 'description', 
    message: 'Please write a short description of your project'},

    {type:'list', 
    name: 'license', 
    message: 'What kind of license should your project have',
    choices: [
        "Mit",
        "APACHE",
        "artistic",
        "bsl",]},

    {type:'input', 
    name: 'install', 
    message: 'What should be run to install dependencies?'},

    {type:'input', 
    name: 'test', 
    message: 'What command should be run to run test?'},

    {type:'input', 
    name: 'usage', 
    message: 'What does the user need to know about using the repo?'},

    
{type: 'input',
     name: 'contributions',
     message: 'What does the user need to know about contributing to the repo?'}]).then(answers => {
    
        const { github, email, title, description, install, usage, license, test, contributions} = answers
    console.log('github:',github)
    console.log('email:',email)
    console.log('title:',title)
    console.log('description:',description)
    console.log('install:',install)
    console.log('usage:',usage)
    console.log('license:',license)
    console.log('test:',test)
    console.log('contributions:', contributions)

const readmeContent = generateReadme(github, email, title, description, install, usage, license, test, contributions)
console.log('readmeContent:', readmeContent)
// fs.writeFile('README.md', readmeContent, )
fs.writeFile('README.md', readmeContent, (err) => err ? console.log(err) : console.log('successfully created README'))
})

// promptUser();