// 소수찾기
/**
 * 1. 각각의 원소가 소수인지 확인
 * 2. 차례대로 조합하여 소수인지 확인
 * 2-1. 531 일경우, lt가 5 이고 rt가 3이면 53 으로 O, result에 넣음.
 * 2-2. lt가 5, rt가 1 이면 531으로 X, 
 * 2-3. lt가 5, rt가 1 이면 31으로 O,
 * 2-4. lt가 
 */

// function solution(numbers) {
//     var answer = 0;
//     let lt = 0;
//     let result = [];
//     let newNum = 0;

//     for(var rt=0; rt<numbers.length; rt++){
//         lt = 0;
//         newNum = numbers[rt];
//         if(isPrime(newNum)) result.push(newNum);  
//         while(lt < numbers.length){
//             if(lt !== rt){
//                 console.log("rt   :  ",rt,"   lt   :   ",lt);
//                 newNum = String(numbers[rt]) + String(numbers[lt]);
//                 console.log("newNum : ",newNum);
//                 if(isPrime(newNum)) result.push(newNum);  
//             }
//             lt++;
//         }
//     }

//     console.log("Result  >>>>   ",result);
//     answer = result.length;
//     return answer;
// }

function solution(numbers) {
    const n = numbers.length;
    const set = new Set();
   
    for (let m = 1; m <= n; m += 1) {
      let visited = Array.from({ length: n }, () => 0);
      let temp = Array.from({ length: m }, () => 0);
      DFS(0, m, visited, temp);
    }
   
    function DFS(L, m, visited, temp) {
      if (L === m) {
        const number = Number(temp.join(""));
        const isPrimeNumber = isPrime(number);
        if (isPrimeNumber) set.add(number);
      } else {
        for (let i = 0; i < n; i += 1) {
          if (!visited[i]) {
            visited[i] = 1;
            temp[L] = numbers[i];
            DFS(L + 1, m, visited, temp);
            visited[i] = 0;
          }
        }
      }
    }
   
    console.log(set);
    return set.size;
}

function isPrime(num){
    if(num == 1 || num == 0) return false;
    for(let i=2; i<=parseInt(Math.sqrt(num)); i++){
        if(num%i===0) return false;
    }
    return true;
}

// solution("011");
console.log(solution([5,3,1]));