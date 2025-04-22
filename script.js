

// Tipovi podataka: dtring, int, float (decimal), bool

let name = "Tomislav";
let age = 36;

// Objects

let person = {
  name: "Toma",
  age: 32,
  professor: true,
  courses: ["HTML/Css","JavaScript","PHP", "Laravel","React"],
  children: ["Veljko", "Pavle"],
  physicalCharacteristics: {
    height: 182,
    weight: 100,
    hair: "brown"
  }
};

person.courses.push("Phyton");

let siteName = "ITMentorstva";
let siteLink = "ITMentorstva.com";
let courses = ["HTML/Css","JavaScript","PHP", "Laravel","React"];

if(siteName == "ITMentorstva") {
    console.log("Ime sajta je ITMentorstva");
}

if(siteLink == "google.com") 
{
    console.log("Link sajta je dobar")
}
else if (siteLink == "ITMentorstva.com")
{
    console.log("Link sajta je najvazniji");
}
else 
{
    console.log("ime sajta nije google.com, vec je ime sajta: " + siteLink);
}

let noumberOfCourses = courses.length;
console.log(noumberOfCourses);

let userName = prompt();

console.log(userName);
