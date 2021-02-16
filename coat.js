let isRainy = false
let isWindy = false
let isCloudy = false
let temperature = 19

if (isRainy && isWindy && isCloudy && temperature <= 0) {
  console.log('Attention au verglas')
} else if (temperature <= 18) {
  console.log('Mettez votre manteau, il va faire frais')
} else if (isCloudy) {
  console.log('Ciel couvert attenton au precipitations')
} else if (isRainy) {
  console.log('Mettez votre imperméable')
} else if (isRainy || isWindy) {
  console.log('Mettez votre manteau')
} else {
  console.log('Vous n\'avez pas besoin de manteau aujourdh\'hui')
}