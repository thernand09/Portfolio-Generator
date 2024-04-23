const fs = require('fs');
const inquirer = require('inquirer');

// Prompt the user for information
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where are you located?',
    },
    {
        type: 'input',
        name: 'bio',
        message: 'Enter a short bio:',
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub URL:',
    },
])
.then((data) => {
    // Construct HTML document using template literals
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Portfolio</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 20px;
                    background-color: #f2f2f2;
                }
                .container {
                    max-width: 800px;
                    margin: 0 auto;
                    background-color: white;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    color: #333;
                }
                p {
                    margin-bottom: 10px;
                }
                a {
                    color: #007bff;
                    text-decoration: none;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>${data.name}'s Portfolio</h1>
                <p><strong>Location:</strong> ${data.location}</p>
                <p><strong>Bio:</strong> ${data.bio}</p>
                <p><strong>LinkedIn:</strong> <a href="${data.linkedin}">${data.linkedin}</a></p>
                <p><strong>GitHub:</strong> <a href="${data.github}">${data.github}</a></p>
            </div>
        </body>
        </html>
    `;

    // Write HTML document to file system
    fs.writeFile('portfolio.html', htmlContent, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Portfolio generated successfully!');
        }
    });
});
