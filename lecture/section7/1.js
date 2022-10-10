/* 선택정렬 */
// 오름차순 정렬 : i에서 끝까지 돌았을 때 가장 작은 수를 앞에 위치시킨다.
function solution(arr){
    let answer=arr;
    let min = 0;
    
    for(let i=0;i<arr.length;i++){
        let idx = i;
       for(let j=i+1;j<arr.length;j++){
           if(arr[j]<arr[idx]) { idx = j; }
       }
       [arr[i], arr[idx]] = [arr[idx], arr[i]];     // 값 교차
    }
    return answer;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));