function solution(s){
    let answer="YES";
    let stack = [];
    // 1. "("는 무조건 넣고 ")"은 무조건 빼는데
    // 2. pop할때 스택이 비어있으면 안되고,
    // 3. for문 순회가 끝난 후 스택이 비어있어야함. ( "("가 남았다는 얘기 )

    for(let i=0;i<s.length;i++){

        if(s[i] == "("){
            stack.push(s[i]);
        }else{
            if(stack.length < 1){
                return "NO";
            }else{
                stack.pop("(");
            }
        }
    }

    if(stack.length > 0){ return "NO"; }
    return answer;
}

let a="(())(";
console.log(solution(a));