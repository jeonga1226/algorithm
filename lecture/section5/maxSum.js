function solution(k, arr){
    let answer=0;
    let sum=0;
    for(let i=0; i<arr.length-k;i++){
        var temp = arr.slice(i, i+k);
        sum = temp.reduce((tot, curr) => { return tot + curr; },0);
        if(sum > answer){ answer = sum; }
    }
    return answer;
}

let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));