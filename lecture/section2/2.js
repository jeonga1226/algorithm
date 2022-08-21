function solution(a, b){         
    let answer=[];

    const n = a.length;
    for(let i=0; i<n; i++){
        if(a[i] === b[i]){ answer.push("D")}
        if((a[i] < b[i]) || (b[i]==1 && a[i]==3)){ answer.push("B")}
        if(a[i] > b[i]){ answer.push("A")}
    }
    
    return answer;
}

let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(a, b));