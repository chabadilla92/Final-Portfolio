// Using jQuery to store json file into variable projects
const projects = $(".projects")

// Ajax call, built into jQuery
$.ajax("./json/projects.json") 
.then( data => {
    data.forEach((project) => {
        const div = $("<div class='project'>")
        div.html(`
        <h3>${project.title}</h3>
        <p>${project.description}</p>`)
        projects.append(div)
    })
}) 