function solution(m, arr){
    let answer=0, sum=0, lt=0;
    for(var rt=0; rt<arr.length; rt++){
        sum += arr[rt];
        // sum 이 m 값을 넘으면 lt인덱스 값을 뺀 후 다음 lt인덱스값으로  세팅한다.
        while(sum > m){
            sum -= arr[lt++];
        }
        answer+=(rt-lt+1);
    }
    return answer;
}

let a=[1, 3, 1, 2, 3];
console.log(solution(5, a));