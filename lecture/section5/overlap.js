// 중복원소 구하기
function solution(arr1, arr2){
    let answer = [];
    /************** 내가 짠 소스 *************/
    arr1.forEach(item => {
        if(arr2.includes(item)) {
            answer.push(item);
        }
    });
    // answer.sort();  // 두자리 이상 수일 경우 원소가 문자가 됨
    answer.sort((a,b) => { return a-b; });

    /************** 답안 소스 *************/
    
    
    return answer;
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));