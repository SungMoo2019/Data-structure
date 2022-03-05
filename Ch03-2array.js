const arr =[1, 2, 3, 4, 5, 6];

console.log(arr.length);
arr.length =3;
console.log(arr);
arr.length = 10;
console.log(arr);

arr.push(7);
arr.push(7, 8, 9);
console.log(arr);
arr.pop();
arr.pop();
console.log(arr.pop());

arr.shift();
arr.shift();
console.log(arr);
arr.unshift(10);
console.log(arr);

console.log(arr.slice(2, 4));

const obj ={ name: "손성무", college:"Changwon University"};

obj["email"] ="lolsms0211@gmail.com";

console.log('email' in obj);
console.log('phone' in obj);

console.log(Object.keys(obj));