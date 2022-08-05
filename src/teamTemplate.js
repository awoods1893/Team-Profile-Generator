const createManagerCard = managerTitle => {
    return managerTitle.map(manager =>{
        return `<div class="card employee-card">
        <div class="card-header bg-info text-white">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title">Software Engineering ${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>`
    }).join('');

}

const createInternCard = internTitle => {
    return internTitle.map(intern => {
        return `<div class="card employee-card">
        <div class="card-header bg-info text-white">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title">Software Engineering ${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>`
    }).join('');
}


const createEngineerCard = engineerTitle => {
    return engineerTitle.map(engineer => {
        return `<div class="card employee-card">
        <div class="card-header bg-info text-white">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title">Software ${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub:${engineer.getGitHub()}</li>
            </ul>
        </div>
    </div>`
    }).join('')
}

const createHTMLPage = teamArray => {
    let cardsArray = [];
    const engineerTitle = teamArray.filter(team => {
        return team.getRole() === "Engineer";
    }); 
    const internTitle = teamArray.filter(team => {
        return team.getRole() ==="Intern";
    });
    const managerTitle = teamArray.filter(team => {
        return team.getRole() === "Manager";
    });
    if (managerTitle) {
        cardsArray.push(createManagerCard(managerTitle));
    }
    if (engineerTitle) {
        cardsArray.push(createEngineerCard(engineerTitle));
    }
    if (internTitle) {
        cardsArray.push(createInternCard(internTitle));
    }
    return cardsArray.join('');
  
};

module.exports = cardsArray => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading bg-primary">
                    <h1 class="text-center text-white">Software Engineering Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="row team-area col-12 d-flex justify-content-center">
                <div class="card-deck">
                    ${createHTMLPage(cardsArray)}
                </div>
            </div>
        </div>
    </body>
    </html>
        `;
}