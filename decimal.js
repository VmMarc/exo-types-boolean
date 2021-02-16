let nb = 0x123
nb.toString = (10)
console.log(nb)

let nb1 = 0123
nb.toString = (10)
console.log(nb1)

let nb2 = 0b10011001
nb.toString = (10)
console.log(nb2)

let nb3 = 0xdeadbeef
nb.toString = (10)
console.log(nb3)

let nb4 = 0xea7beef
nb.toString = (10)
console.log(nb4)

let nb5 = 0b1111111111111111
nb.toString = (10)
console.log(nb5)
0xea7beef

let nb6 = 0777
nb.toString = (10)
console.log(nb6)

//Ou avec une boucle for

let numbers = [0x123, 0123, 0b10011001, 0xdeadbeef, 0xea7beef, 0b1111111111111111, 0777]

for (let i = 0; i < numbers.length; i++)
  console.log(numbers[i].toString(10))








