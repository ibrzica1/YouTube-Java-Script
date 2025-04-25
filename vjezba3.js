let osoba = {
  Name: "Igor",
  Surname: "Brzica",
  Years: 36,
  Profession: "driver",
  Salary: 2500
}

let person = document.getElementById("persons");

for(key in osoba)
{
  person.innerHTML += `<p>${key}: ${osoba[key]}</p>`
  if(osoba.Years > 18)
  {
    person.style.color= "red";
  }
}