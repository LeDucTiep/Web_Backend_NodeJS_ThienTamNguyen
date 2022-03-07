const user = {
    name: "Ti",
    age: 20
};
// Kiểm tra xem key có trong object hay không.
console.log("name" in user);

// Lấy mảng gồm các keys.
console.log(Object.keys(user));
// Lấy ra các values.
console.log(Object.values(user));

setTimeout(() => {
    console.log("This line is printed after start 2 seconds")
}, 2000);

let time = 0;
const interval = setInterval(() => {
    if (time === 10)
        // Tự clear chính mình.
        clearInterval(interval);
    else {
        console.log("time: ", time);
        time++;
    }
}, 1000);

// console.log(interval);

// spread operator

const arr = [1, 2, 3, 5];
// ...arr = 1, 2, 3, 5
const copyArr = [...arr];

arr.push(14);

console.log(arr);
console.log(copyArr);

const myuser = {
    name: "Ti",
    age: 20
}
const {name, age} = myuser;

const copyUser = {...myuser};
