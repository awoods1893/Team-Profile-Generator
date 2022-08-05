const createManagerCard = managerTitle => {
    return managerTitle.map(manager =>{
        return `<div class="card text-bg-info mb-3" style="max-width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${manager.getName()}</h5>
          <p class="card-text">Software Engineering ${manager.getRole()}.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a> </li>
        </ul>
    </div>
</div`
    }).join('');

}

const createInternCard = internTitle => {
    return internTitle.map(intern => {
        return `<div class="card text-bg-info mb-3" style="max-width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${intern.getName()}</h5>
          <p class="card-text">Software Engineering ${intern.getRole()}.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a> </li>
        </ul>
    </div>
</div`
    }).join('');
}

const createEngineerCard = engineerTitle => {
    return engineerTitle.map(engineer => {
        return `<div class="card text-bg-info mb-3" style="max-width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${engineer.getName()}</h5>
          <p class="card-text">Software Engineering ${engineer.getRole()}.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">GitHub Profile: ${engineer.getGitHub()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a> </li>
        </ul>
    </div>
</div`
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
    if (engineerTitle) {
        cardsArray.push(createEngineerCard(engineerTitle));
    }
    if (internTitle) {
        cardsArray.push(createInternCard(internTitle));
    }
    if (managerTitle) {
        cardsArray.push(createManagerCard(managerTitle));
    }
    return cardsArray.join('');
  
};

module.exports = cardsArray => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Software Engineering</title>
        <link rel="stylesheet" type="text/css" href="style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" 
        rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main class="container my-5">
            <div class="row">
                ${createHTMLPage(cardsArray)}
            </div>
        </main>
    </body>
    </html>
        `;
}