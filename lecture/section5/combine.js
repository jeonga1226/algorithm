// 두배열 합치기
function solution(arr1, arr2){
    const comb = arr1.concat(arr2);
    return comb.sort((a,b) => {return a-b});
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));