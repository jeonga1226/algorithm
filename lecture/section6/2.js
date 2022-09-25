function solution(s){  
    let answer = "";
    let stack = [];

    // 1. "(" 이 나오면 stack에 담기 시작
    // 2. ")"이 나오면 stack 비움
    // 3. 그 외 문자일 경우 stack이 비어 있을 경우에 answer에 추가 
    
    for(let i=0;i<s.length;i++){
        if(s[i] == "("){
            stack.push(s[i]);
        }else if(s[i] == ")"){
            stack.pop();
        }else{
            if(stack.length == 0){ 
                answer += s[i];
            }
        }   
    }


    return answer;
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));