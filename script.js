// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
      response.json().then(function(json){
        let container = document.getElementById('container');
        for(elem in json){
            container.innerHTML += 
            `<div class="astronaut" id="astronaut-${json[elem].firstName}">
                <div class="bio">
                    <h3>${json[elem].firstName}</h3>
                    <ul id=${json[elem].firstName}-skills></ul>
                    </div>`
        let ul = document.getElementById(json[elem].firstName + '-skills')
            ul.innerHTML += `
            <li>Hours in Space: ${json[elem].hoursInSpace}</li>
            <li>Active: ${json[elem].active}</li>
            <li>${json[elem].skills}</li>`
            let astroDiv = document.getElementById('astronaut-' + json[elem].firstName)
            astroDiv.innerHTML +=`
            <img class="avatar" src="${json[elem].picture}">
            `
        }
      })
    })
  })