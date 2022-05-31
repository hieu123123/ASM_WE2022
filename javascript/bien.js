// bước 1:
const a = "10";
const b = 20;
 
// bước 3:
function sum(a,b){  
    //kiểm tra
    if ((typeof a !== "number" || typeof b!== "number")) return - 1;
    // xử lí
    const tong = a + b;
    // kết quả
    return tong;
}
// bước 2:
console.log (sum(a,b));