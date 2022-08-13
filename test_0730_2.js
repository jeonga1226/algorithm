function solution(s) {
    var answer = -1;
    let str = [];  
    str = s.split(""); // 문자열을 쪼갠 배열
    let successYn = '';
    
    // 1. 문자열 배열 길이 -1 만큼 for문을 순회하면서 체크
    // 2. 2개 붙어있는 짝일 경우 배열에서 제거하고 
    //    for문을 빠져나간 후 다시 수행
    // 3. str을 다 순회해도 짝이 없는 경우 successYn에 "N"
    while(str.length > 0){
        for(let i=0; i<str.length;i++){
            if(i == str.length-1){
                successYn = 'N';
                continue;
            }

            if(str[i] == str[i+1]){
                str.splice(i,2);
                break;
            }
        }
        if(str.length == 0){
            answer = 1;
            break;
        }else if(successYn == 'N'){
            answer = 0;
            break;
        }
    }

    return answer;
}

solution("cdcd");
