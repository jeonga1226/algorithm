
function solution(arr){         
    let answer=[];
    let pre = 0;
    arr.forEach(num => {
        if(pre < num){
            answer.push(num);
        }
        pre = num;
    });

    return answer;
}

let arr=[7, 3, 9, 5, 6, 12];
console.log(solution(arr));