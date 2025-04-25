 let name = "admin";
 let nameParagraph = document.getElementById("name");
 
 nameParagraph.innerText = name;
 name = nameParagraph.innerText.toLowerCase();
 if ( name == "admin")
 {
  nameParagraph.style.color = "red";
 }
 else
 {
  nameParagraph.style.color = "blue";
 }
 
 nameParagraph.style.fontWeight = 700;

 let carsElement = document.getElementById("automobili");
 carsElement.innerHTML = "<p>Hello vorld</p>"

 for(let i=0; i<100; i++) 
 {
  console.log(i);
 }

 let brands = ["audi","mercedes","golf","zastava"];

 for(let cars of brands) 
 {
    carsElement.innerHTML += "<p>"+cars+"</p>"; 
    
 }

 let carCharacters = {
  brand: "Opel",
  model: "Insignia",
  fuel: "Diesel"
 };

 for (let car in carCharacters)
 {
  /*  carsElement.innerHTML += "<p>" +car+" "+carCharacters[car] +"</p>";  */

  carsElement.innerHTML += `<p>${car + " " + carCharacters[car]}</p>`;
 }

 let carStats = document.getElementById("carStats");

 for(stats in carCharacters) 
 {
  carStats.innerHTML += `<p>${stats + ": "+carCharacters[stats]}</p>`
 }