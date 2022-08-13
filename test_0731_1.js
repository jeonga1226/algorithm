function solution(numbers, target) {
    var answer = 0;
    var stack = new Array(numbers.length); // 더하고 뺀 값을 쌓을 이차원배열
    stack[0] = new Array();
    stack[0][0] = numbers[0];

    // 1. numbers를 순회하면서 stack에 더한값, 뺀값을 쌓는다.
    //    j가 짝수번째일 경우 더한값 / j가 홀수번째일 경우 뺀값
    // 2. 
    for(let i=0; i<numbers.length; i++){
        for(let j=0; j<stack[i].length; j++){
            if(j%2 == 0){
                stack[i+1][j] = stack[i][j] + numbers[i+1];
            }else{
                stack[i+1][j] = stack[i][j] - numbers[i+1];   
            }
            console.log("i : ",i,"  j : ",j,"   stack[i+1][j]   >>  ",stack[i+1][j]);
        }
    }
    console.log("마지막 stack   >>  ",stack[stack.length -1]);
    var result = stack[stack.length -1].filter((x) => {
        return x === target;
    });

    return result.length;
}

function solution(numbers, target) {
    let count = 0;

    // 1. numbers의 길이(depth) 만큼 순회
    // 2. 마지막 depth에서 target과 일치하는 값을 카운트한다.
  
    function dfs(depth, sum) {
      if (depth === numbers.length) {   
        if (sum === target) {
          count += 1;
        }
        return;
      }
      dfs(depth + 1, sum + numbers[depth]); // 왼쪽
      dfs(depth + 1, sum - numbers[depth]); // 오른쪽
    }
  
    dfs(0, 0);
  
    return count;
}

solution([1, 1, 1, 1, 1],3,5);