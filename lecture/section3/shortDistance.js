function solution(s, t){
    let answer = [];
    let cnt = 1000; // 문자열 길이는 1000 이하이기 때문
    for(let i=0; i<s.length; i++){
        // cnt = (s[i] == t) ? 0 : cnt++;
        if(s[i] == t) { 
            cnt = 0
        }else{
            cnt++;
        }
        answer.push(cnt);
        // console.log("cnt >>> ", cnt);
    }
    // console.log("answer1 >>> ", answer);

    for(let j=s.length-1; j>=0; j--){
        if(s[j] == t) { 
            cnt = 0
        }else{
            cnt++;
        }

        if(answer[j] > cnt){
            answer[j] = cnt;
        }
    }
    // console.log("answer2 >>> ", answer);

    return answer;
}

let str="teachermode";
console.log(solution(str, 'e'));