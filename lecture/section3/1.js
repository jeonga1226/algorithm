function solution(s){
    let answer="YES";
    s = s.toLowerCase();
    const len = s.length;
    for(let i=0; i<len/2; i++){
        if(s[i] != s[(len-1)-i]){
            answer = "NO";
            break;
        }
    }
    return answer;
}

let str="goooG";
console.log(solution(str));