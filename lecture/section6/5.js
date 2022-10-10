/* 쇠막대기 */
// 괄호가 나오면 스택으로 푸는 문제!

function solution(s){
    let answer=0;
    let stack=[];

    // 1. 여는 괄호이면 스택에 넣는다.
    // 2. 닫는 괄호이면, s의 바로 앞 괄호를 체크한다. 바로앞이 ( 이면 레이저.
    // 3. 레이저일 경우, 스택에서 제외한다. -> answer += 스택 내 ( 의 갯수는 쇠막대기 갯수
    // 4. 쇠막대기의 끝일 경우, 스택에서 제외한다 -> answer += 1

    for(let i=0; i<s.length; i++){
        if(s[i] === '('){
            stack.push(s[i]);
        }else{
            stack.pop();
            if(s[i-1] === '(')  { answer += stack.length; }
            else                { answer += 1; }
        }
    }
             
    return answer;
}

let a="()(((()())(())()))(())";
console.log(solution(a));