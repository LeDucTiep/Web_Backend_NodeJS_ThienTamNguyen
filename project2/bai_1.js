const users = [
    {
        id: 1,
        balance: 10,
        age: 18,
        salary: 2000
    },
    {
        id: 2,
        balance: 20,
        age: 24,
        salary: 1000
    },
    {
        id: 3,
        balance: 30,
        age: 13,
        salary: 3000
    }
];
// Tính tổng salary các user có age >= 18 

const sumSalary = users.reduce(
    (acc, val) => {
        if (val.age >= 18)
            return acc + val.salary;
        return acc;
    }, 0
)

console.log(sumSalary);