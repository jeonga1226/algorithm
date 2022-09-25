function solution(str1, str2){
    let answer="YES"; 
    let sH = new Map();

    /* 내 풀이법 */
    const newS1 = str1.toLowerCase().split("").sort().join('');
    const newS2 = str2.toLowerCase().split("").sort().join('');
    console.log("new s1 => ", newS1, " new s2 => ", newS2);
    if(newS1 !== newS2) { answer = "NO"; }

    /* 알고리즘 풀이법 */
    for(let x of str1){
        if(sH.has(x)) sH.set(x, sH.get(x)+1);
        else sH.set(x, 1);
    }
    for(let x of str2){
        if(!sH.has(x) || sH.get(x)==0) return "NO";
        sH.set(x, sH.get(x)-1);
    }

    return answer;
}

let a="AbaAeCe";
let b="baeeACA";
console.log(solution(a, b));