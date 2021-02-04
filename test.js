let arr = [],
  l = 10000;

for (let i = 0; i < l; i++) {
  arr
    .push(Math.random() + Math.random())
    .toString(36)
    .slice(2);
}
var count = 0;

for (let i = 0; i < l; i++) {
  for (let j = i; j < l; j++) {
    if (arr[i] === arr[j]) count++;
  }
}
console.log(count);
