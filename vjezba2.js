let brands = ["audi","mercedes","golf"];
let odgovor = prompt();
odgovor = odgovor.toLowerCase();

if (odgovor == brands[0])
{
  console.log("unos odgovara brandu audi")
}
else if (odgovor == brands[1])
  {
    console.log("unos odgovara brandu mercedes")
  }
  else if (odgovor == brands[2])
    {
      console.log("unos odgovara brandu golf")
    }
    else
    {
      console.log("unos ne odgovara niti jednom brendu")
    }