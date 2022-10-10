/* 버블정렬 */
// 서로 이웃한 데이터들을 비교하며 가장 큰 데이터를 가장 뒤로 보냄
function solution(arr){
    let answer=arr;
    // for(let i=0;i<arr.length-1;i++){
    //     let idx = i;
    //     for(let j=i+1;j<arr.length;j++){
    //         if(arr[idx]>arr[j]){
    //             [arr[idx], arr[j]] = [arr[j], arr[idx]];     // 값 교차
    //         }else{
    //             break;
    //         }
    //         idx++;
    //     }
    // }

    /* 답안 */
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]]=[arr[j+1], arr[j]];
            }
        }   
    } 
    return answer;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));