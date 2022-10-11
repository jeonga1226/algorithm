/* 교육과정 설계 */
function solution(need, plan){
    let answer="YES";
    let queue = need.split("");

    // 1. plan를 순회하면서 need의 첫요소라면 need의 첫요소를 제거한다.
    for(let i=0; i<plan.length; i++){
        if(plan[i] === queue[0]) {
            queue.shift();
        }
    }

    if(queue.length){ answer = "NO"; }
    else            { answer = "YES";}

    return answer;
}

let a="CBA";
let b="CBDAGE";     // "YES"
let c = "CGEADB";   // "NO"
console.log(solution(a, b));