function solution(str){
    let answer="";
    answer = parseInt(str.replace(/[^0-9]/g,""));
    return answer;
}

let str="g0en2T0s8eSoft";
console.log(solution(str));