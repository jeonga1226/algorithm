function solution(s){  
    let answer;
    let sH = new Map();
    let max = 0;
    for(let x of s){
        console.log("get x : ", sH.get(x));
        if(sH.has(x))   { sH.set(x, sH.get(x) + 1); }
        else            { sH.set(x, 1); }
    }

    sH.forEach((val,key) => {
        if(val > max){
            max = val;
            answer = key;
        }
    })
    return answer;
}

let str="BACBACCACCBDEDE";
console.log(solution(str));