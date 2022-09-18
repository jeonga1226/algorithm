// 연속부분수열 1
function solution(m, arr){
    let lt = 0;
    let answer = 0;
    let sum = 0;

    for(var rt=0; rt<arr.length; rt++){
        sum += arr[rt];
        if(sum == m) answer++;  
        // sum 이 m 값을 넘으면 lt인덱스 값을 뺀 후 다음 lt인덱스값으로  세팅한다.
        while(sum >= m){
            sum -= arr[lt++];
            if(sum == m) answer++;  
        }
    }

    return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));