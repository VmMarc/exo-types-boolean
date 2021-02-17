let numbers = [10, 15, 16, 5005, 52390903]

console.log(`En Binaire :`)
for (let bi = 0; bi < numbers.length; bi++)
  console.log(numbers[bi].toString(2))
console.log(`\t`)

console.log(`En Octale :`)
for (let oc = 0; oc < numbers.length; oc++)
  console.log(numbers[oc].toString(8))
console.log(`\t`)

console.log(`Et en Hexadécimal :`)
for (let hex = 0; hex < numbers.length; hex++)
  console.log(numbers[hex].toString(16))
console.log(`\t`)