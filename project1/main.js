// đếm xem có bao nhiêu kí tự viết hoa
const str = "I Love VietNam"
var dem = 0;

for (const i of str) {
    if (i.toLowerCase() != i )
        dem++;
}

console.log(dem);


