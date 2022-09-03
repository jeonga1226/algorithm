// K번째 큰수
function solution(n, k, card){
    let answer; 
    let sumArr = [];
    // 1. card를 순서대로 나열한다.
    // 2. card를 순회하며 k개씩의 합을 sumArr 배열에 담는다. 
    // 3. sumArr 배열을 중복 제거하여 순서대로 나열한다.
    // 4. answer : k-1번째 인덱스 값

    /************** 내가 짠 소스 *************/
    card.sort((a,b) => { return a-b; });
    // for(let i=0; i<card.length; i++){
    //     const fixed = card[i];
    //     let cnt = 1;
    //     let sum = fixed;
    //     for(let j=i+1; j<card.length; j++){
    //         console.log("cnt : ",cnt,"    k : ",k);
    //         if(cnt <= k){   //  k보다 작거나 같을 경우
    //             if(i !== j){    // fixed 를 제외
    //                 sum += card[j];
    //                 cnt++;
    //             }
    //         }else{
    //             console.log("sum : ",sum);
    //             sumArr.push(sum);
    //             cnt = 1;
    //             sum = fixed;
    //         }
    //     }
    // }

     /************** 답안 소스 *************/
    for(let i=0; i<n; i++){             // 1장
        for(let j=i+1; j<n; j++){       // 2장
            for(let k=j+1; k<n; k++){   // 3장
                sumArr.push(card[i]+card[j]+card[k]);
            }
        }
    }

    console.log("finish!!!!!");
    console.log("sumArr >>>>> ",sumArr);
    sumArr = [...new Set(sumArr)];                      // 중복제거
    sumArr = sumArr.sort((a,b) => { return b-a; });     // 내림차순
    
    answer = sumArr[k-1];

    return answer;
}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));