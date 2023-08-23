fetch("http://localhost:3000/teams")
.then(resp => resp.json())
.then(data => data.forEach(element => {
    const mainContainer = document.getElementById("main_container")
    const name = document.createElement("h2")
    const sport = document.createElement("h3")
    const container = document.createElement("div")
    name.textContent = `team: ${element.name}`
    sport.textContent = `sport: ${element.sport}`
    container.append(name, sport)
    mainContainer.append(container)
}))

document.addEventListener("click", () => {
    alert("You clicked")
})

document.addEventListener("mouseover", () => {
    console.log("mouse over event firing")
})