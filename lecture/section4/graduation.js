// 졸업선물 - 완전탐색
function solution(m, product){
    let answer=0;
    // 1. product 를 오름차순 정렬
    // 2. 배열 순회하면서 하나씩 물품가격 50프로 할인을 적용
    // 3. 적용한 항목 제외한 나머지 중 구매할 수 있는 개수를 카운트

    /************** 내가 짠 소스 *************/
    product.sort((a,b) => { return (a[0] + a[1]) - (b[0] + b[1]); })
    let numbers = [];   // 가능한 개수를 담을 배열
    product.forEach((item, idx) => {
        let rest = m - (Math.floor(item[0] / 2) + item[1]); // 할인된 항목을 뺀 나머지 금액
        let cnt = 1;    // 가능한 개수 카운트

        const array = [...product]; // product 복사
        array.splice(idx, 1);       // 할인 항목 제외
        
        for(let i=0; i<array.length; i++){
            rest = rest - (array[i][0] + array[i][1]);
            if(rest < 0) break;
            cnt++;
        }
        numbers.push(cnt);
    });
    answer = Math.max.apply(null, numbers);

    /************** 답안 소스 *************/
    // for(let i=0; i<n; i++){
    //     let money=m-(product[i][0]/2+product[i][1]);
    //     let cnt=1;
    //     for(let j=0; j<n; j++){
    //         if(j!==i && (product[j][0]+product[j][1])>money) break;
    //         if(j!==i && (product[j][0]+product[j][1])<=money){
    //             money-=(product[j][0]+product[j][1]);
    //             cnt++;
    //         }
    //     }
    //     answer=Math.max(answer, cnt);
    // } 
    
    return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));