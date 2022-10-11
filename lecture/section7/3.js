/* 버블정렬 응용 */
function solution(arr){
    let answer=arr;
    // 1. 두 이웃 수 중에 음수를 왼쪽, 양수를 오른쪽에 위치

    // 1 2 -3 -2 3 5 -6 6
    // 1 -3 -2 2 3 -6 5 6
    // -3 -2 1 2 -6 3 5 6
    // -3 -2 1 -6 2 3 5 6
    // -3 -2 -6 1 2 3 5 6

    for(let i=0; i<arr.length-1; i++){          // i : 번째 순위
        for(let j=0; j<arr.length-i-1; j++){    // j : 인덱스
            if(arr[j+1] < 0 && arr[j] > 0){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];   
            }
        }
    }
    return answer;
}

let arr=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));