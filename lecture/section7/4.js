/* 삽입정렬 */
// 아직 정렬되지 않은 임의의 데이터를 이미 정렬된 부분의 적절한 위치에 삽입
function solution(arr){
    let answer=arr;
    for(let i=1; i<arr.length; i++){
        const tmp = arr[i];
        for(let j=i-1; j>=0; j--){
            if(arr[j] > tmp){
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
            }else{
                break;
            }
        }
    }
    return answer;
}

let arr=[11, 7, 5, 6, 10, 9];
console.log(solution(arr));