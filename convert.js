let numbers = [10, 15, 16, 5005, 52390903]

for (let bi = 0; bi < numbers.length; bi++)
  console.log(numbers[bi].toString(2))
console.log(`\t En Binaire`)


for (let oc = 0; oc < numbers.length; oc++)
  console.log(numbers[oc].toString(8))
console.log(`\t En Octale`)

for (let hex = 0; hex < numbers.length; hex++)
  console.log(numbers[hex].toString(16))
console.log(`\t Et en Hexadécimal`)