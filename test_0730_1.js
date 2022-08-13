function solution(progresses, speeds) {
    let answer = [];
    let durationArr = [];   

    // 각 기능 별 걸리는 일자를 durationArr에 담는다.
    durationArr = progresses.map( (v,i) => {
        return Math.ceil((100-v) / speeds[i])
    });

    // 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포되기 위해
    // 앞 기능 기간 < 뒤 기능 기간  => 하나만 배포하기 위해 answer 새로운 인덱스 추가
    // 앞 기능 기간 >= 뒤 기능 기간 => 같이 배포하기 위해 answer마지막 value에 +1
    durationArr.reduce((acc, cur, i) => {
        const _lastIdx = answer.length;
        if(acc < cur) { 
            answer[_lastIdx] = 1; 
        } else { 
            answer[_lastIdx-1]++; 
        }
        return cur;
    }, 0);

    return answer;
}

solution([93, 30, 55],[1, 30, 5]);