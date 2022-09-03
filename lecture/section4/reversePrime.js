/* 뒤집은 소수 */
function isPrime(num){
    if(num===1) return false;
    for(let i=2; i<=parseInt(Math.sqrt(num)); i++){
        if(num%i===0) return false;
    }
    return true;
}

function solution(arr){
    let answer = [];
    arr.forEach(num => {
        var reverse = String(num).split('').reverse().join('');
        if( isPrime(Number(reverse)) ) {
            answer.push(Number(reverse));
        }
    })
    return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));