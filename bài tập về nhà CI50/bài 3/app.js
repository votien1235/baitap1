let input = prompt("Nhập mảng các phần tử cách nhau 1 dấu phẩy");
let arr = input.split(',');

let newArr = [...new Set(arr)];
