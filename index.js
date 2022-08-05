const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const output = ("./", "myTeam.html")
const createTeam = require ("./src/teamTemplate")


teamArray = [];

function runApplication() {
    //function for assembling the team. switch statements are used to determine which type of employee is being created.
    //the type of employee selected determines which group of questions are asked. once the user selects "I don't want to add any more team members" the function exits
    function buildTeam(){
        inquirer.prompt([{
            type: "list",
            message: "Who would you like to add to the team?",
            name: "addEmployeePrompt",
            choices: ["Manager", "Engineer", "Intern", "I don't want to add any more team members."]
        }]).then(function(userInput){
            switch (userInput.addEmployeePrompt) {
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                    
                default:
                    generateHTML();
            }
        })
    }
    
    //prompting for user inputs regarding the manager and validating if the responses are legitimate
    function addManager() {
        inquirer.prompt([
            {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else{
                    console.log("Please enter the manager's name.");
                    return false;
                }
            }
        },
           { type: "number",
            name: "managerID",
            message: "What is the manager's employee ID number?",
        validate: idInput => {
            if (typeof idInput == "number"){
                return true;
            } else {
                console.log("Employee ID should be a number.");
                return false;
            }
        }
    },
       {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email address?",
        validate: emailInput => {
            if(emailInput.match(/^\S+@(yahoo|gmail|outlook)+\.com$/g)) { //found this email checker regex on Google
                return true;
            } else {
                console.log("Please enter a valid email address.");
                return false;
            }
        }
    },
        {
        type: "number",
        name: "officeNumber",
        message: "What is the manager's office number?",
        validate: officeNumberInput => {
            if (typeof officeNumberInput == "number") {
                return true;
            } else {
                console.log("Response should be a number.");
                return false;
            }
        }
        
    
        
       //push the responses about the manager to the array, then return back to the questions. 
    }]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.officeNumber);
        teamArray.push(manager);
        buildTeam();
        
    });
    
}

//if the user selects type of "Engineer", asks these questions and validates the responses.
function addEngineer() {
    inquirer.prompt([
        
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else{
                console.log("Please enter the engineer's name.");
                return false;
                
            }
        }   
    },
    
    {
        type: "number",
        name: "engineerId",
        message: "What is the engineer's employee ID number?",
        validate: idInput => {
            if (typeof idInput == "number"){
                return true;
            } else {
                console.log("Employee ID should be a number.");
                return false;
            }
        }   
    },
    
    {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?",
        validate: emailInput => {
            if(emailInput.match(/^\S+@(yahoo|gmail|outlook)+\.com$/g)) {
                return true;
            } else {
                console.log("Please enter a valid email address.");
                return false;
            }
        },
      },
      
      {
          type: "input",
          name: "engineerGithub",
          message: "What is the engineer's GitHub username?",
          validate: giHubInput => {
              if (giHubInput) {
                  return true;
                } else{
                    console.log("Please enter the engineer's GitHub username.");
                    return false;
                }
            },
            
        }
        //pushes the answers about the engineer to the array, then goes back to the questions
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(engineer);
        buildTeam();
    });
    
}
    //if intern is selected, prompts the user with the questions below then validates the responses.
  function addIntern() {
      inquirer.prompt([
          
          {
              type: "input",
              name: "internName",
              message: "What is the intern's name?",
              validate: nameInput => {
                  if (nameInput) {
                      return true;
                    } else{
                        console.log("Please enter the intern's name.");
                        return false;
                    }
                }  
                
            },
            
            {
                type: "number",
                name: "internId",
                message: "What is the intern's employee ID number?",
                validate: idInput => {
                    if (typeof idInput == "number"){
                        return true;
                    } else {
                        console.log("Employee ID should be a number.");
                        return false;
                    }
                }  
      },
      
      {
          type: "input",
          name: "internEmail",
          message: "What is the intern's email address?",
          validate: emailInput => {
              if(emailInput.match(/^\S+@(yahoo|gmail|outlook)+\.com$/g)) {
                  return true;
                } else {
                    console.log("Please enter a valid email address.");
                    return false;
                }
            },
        },
        
      {
        type: "input",
        name: "internSchool",
        message: "What school does the intern attend?",
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else{
                console.log("Please enter the intern's school.");
                return false;
            }
        },
    }
    //pushes the intern answers to the array then returns back to the questions
]).then(answers => {
    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
    teamArray.push(intern);
    buildTeam();
});

}

function generateHTML(){
    console.log("Your team is complete. Please see the .html page in this directory.")
    fs.writeFileSync(output, createTeam(teamArray))
}

buildTeam();

};

runApplication();
