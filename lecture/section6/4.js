/* 후위식 연산 */
function solution(s){  
    let answer;
    let stack=[];

    // 1. 숫자가 나오면 무조건 stack에 쌓는다
    // 2. 연산자가 나오면 stack에 있는 마지막 두 수를 뽑아 연산한다
    // 3. 연산한 결과를 쌓는다
    
    for(let x of s){
        if(!isNaN(x)) {
            stack.push(Number(x));
        }else{
            let rt=stack.pop();
            let lt=stack.pop();
            if(x==='+') stack.push(lt+rt);
            else if(x==='-') stack.push(lt-rt);
            else if(x==='*') stack.push(lt*rt);
            else if(x==='/') stack.push(lt/rt);
        }
    }

    answer=stack[0];
    return answer;
}

let str="352+*9-";
console.log(solution(str));