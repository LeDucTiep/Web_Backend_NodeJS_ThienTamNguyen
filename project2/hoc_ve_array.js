//  .map
const numbers = [2, 3, 4, 5, 6, 7];

var result = numbers.map(i => i * 2);

console.log(result);

// .filter

result = numbers.filter(val => val > 4);
// nếu true thì thêm vào result 

console.log(result);


// .reduce 
// lần chạy 1 nếu không có sẵn initialValue thì acc = arr[0], val = arr[1];
var sum = numbers.reduce((acc, val) => {
    return acc + val;
})
console.log(sum);

// lần chạy 1 nếu có sẵn initialValue thì acc = initialValue, val = arr[0];

sum = numbers.reduce((acc, val) => {
    return acc + val;
}, 1)
// Giá trị sau cùng của acc là giá trị trả về của reduce.
console.log(sum); 

const users = [
    {
        id: 1,
        balance: 10
    },
    {
        id: 2,
        balance: 20
    },
    {
        id: 3,
        balance: 30
    }
];

const totalBalance = users.reduce((acc, val) => {
    return acc + val.balance;
}, 0);

console.log(totalBalance);

// .indexOf
// trả về vị trí tìm thấy đầu tiên 
// tìm giá trị 3 bắt đầu tại tại index 1
console.log(numbers.indexOf(3, 1));

// .findIndex
// Khác với indexOf ở trỗ là tham số đầu vào là một hàm
console.log(
    numbers.findIndex(val => val == 3)
);

// .find: trả về phần tử đầu tiên thỏa giá trị 

console.log(
    users.find(val => val.balance === 30)
);