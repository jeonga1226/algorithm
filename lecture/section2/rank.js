/* 등수 구하기 */
function solution(arr){  
    let answer = [];
    arr.sort((a, b) => {
        console.log("a : ",a);
        console.log("b : ",b);
        console.log("b-a : ",b-a);
        return b - a;
    });
    console.log("arr  >> ", arr);
    for(let i=0; i<arr.length; i++){
        if(arr[i] == arr[i-1]){}
        else                    { answer.push(i+1)}
    }


    return answer;
}

let arr=[87, 89, 92, 100, 76];
console.log(solution(arr));