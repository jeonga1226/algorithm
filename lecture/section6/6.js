/* 공주 구하기 */
// N : 왕자 인원수
// K : 특정 숫자
function solution(n, k){
    let answer;
    let queue = [...Array(n)].map((v,i) => i+1);
    let no = 1;

    // 1. queue 가 하나 이상일 경우 순회
    // 2. no가 k 보다 작으면 no 증가 and queue에서 꺼내서 뒤로 배치
    // 3. no가 k 이면 queue의 빼기  

    while(queue.length > 0){
        if(no === k){
            queue.shift();
            no = 1;
        }else{
            queue.push(queue.shift());
            no++;
        }
        if(queue.length == 1) { answer = queue[0]; }
    }

    return answer;
}

console.log(solution(8, 3));