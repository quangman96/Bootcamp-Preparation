//tổng hợp hàm 
//input number >10
function inputNumber(){
    let n = 0;
    do {
    n +=parseInt(prompt("Nhập n: "));
    }
    while (n < 10)
    return n;
}
// Tạo mảng với lenght = n và phần tử random
function creatArray(n){
    let array = new Array(n);
    for (let i=0; i< n; i++) {
    array[i] = Math.floor(Math.random()*100 +1);
}   
    return array;
}
// Hiển thị mảng
function showArray(arr,n){
    for(let i=0; i<n; i++){
        document.write(arr[i]+ ", ");
    }
}
// Kiểm tra số nguyên tố
function isPrime (n){
    if (n>0 && n<3) {
        return true;
    }
        for (let i =3; i< (n-1); i++){
            if (n%i===0){
            return false;
        } 
    return true;
    }
}
// Hiện thị số lượng số nguyên tố
function countPrimes(arr,n){
    let count =0;
    for(let i=0 ;i<n; i++){
        if(isPrime(arr[i]))
        count+=1;
    }
    return count;
}