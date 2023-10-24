let std1Profile = [
    {
        first_name: "John",
        last_name: "Dozie",
        age: 45,
        performance: "Excellent",
        track: "Frontend"
      },
      {
        first_name: "John",
        last_name: "Dozie",
        age: 45,
        performance: "Excellent",
        track: "Frontend"
      }    ,
{
  first_name: "John",
  last_name: "Dozie",
  age: 45,
  performance: "Excellent",
  track: "Frontend"
}
]
let objKeys = Object.values(std1Profile);
console.log(objKeys);


let myMap = std1Profile.map((std1Profile) => {
  console.log(std1Profile.name)
})

console.log(myMap)