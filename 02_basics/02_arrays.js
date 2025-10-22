const marvel =["thor","ironman","spider man"]
const dc =["superman","flash","batman"]

marvel.push(dc)
console.log(marvel)
// in push the new array is formed which have the dc array in it inside so push not preffred
// we use concat ionstead
const allheros = marvel.concat(dc)

// best tool is to use only dot dot approach
const allheroes = [...marvel, ...dc]
console.log(allheroes)
/// .flat is used to convert all the array inside an array into a single array
