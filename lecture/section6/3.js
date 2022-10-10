/* 크레인 인형뽑기 (카카오) */

function solution(board, moves){
    let answer=0;
    let stack = []; // 바구니

    // 1. moves의 길이만큼 순회
    // 2. 크레인이 뽑는 board의 컬럼 값이 0이 아니면 stack에 넣음
    // 3. 바로 이전 stack 값과 동일하면, 바로 이전 값과 본인을 삭제

    for(let i=0; i<moves.length; i++){
        var col =  moves[i] - 1;    // board의 컬럼
        for(let j=0; j<board.length; j++){
            console.log("board[j][col]   : ", board[j][col]);
            if(board[j][col] > 0){ 
                stack.push(board[j][col]); 
                break;
            }
        }
        console.log("여기??   ", stack);
        if(stack[i-1] === stack[i]){
            stack.pop();
            stack.pop();
            answer += 2;
        }
    }
    
    return answer;
}

let a=[[0,0,0,0,0],
       [0,0,1,0,3],
       [0,2,5,0,1],
       [4,2,4,4,2],
       [3,5,1,3,1]];

let b=[1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));