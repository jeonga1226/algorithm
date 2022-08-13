function solution(begin, target, words) {
    var answer = 0;
    var count = 0;
    let diffStr_B = [];
    let diffStr_T = [];
    diffStr_T = target.split("");


    // 1. words for문 순회
    // 2. words[i]와 begin을 비교하여 한개의 알파벳만 다를 경우 begin을 words[i]로 치환 
    //   * 주의!!! 동일한 알파벳 두개일 경우 ? ex) hit, hht 일 경우도 
    // 3. 치환한 begin이 target과 일치할 경우 for문 break
    // 4. target과 begin 사이에 다른 알파벳이 1개일 경우 target이 나올 때 까지 count를 증가시키지 않는다.
    // 4. for문 순회가 끝났는데 target과 일치하지 않으면 answer = 0

    for(let i=0; i<words.length; i++){
        diffStr_B = begin.split("").filter(x => { return !words[i].includes(x) });
        // checkOneDiff(begin, words[i]);
        if(diffStr_B.length == 1){
        // if(checkOneDiff){
            begin = words[i];
            
            if(begin == target){
                count++;
                answer = count;
                break;
            }else if(diffStr_T. length > 1){
                count++;
                diffStr_T = begin.split("").filter(x => { return !target.includes(x) });
            }
        }
        if(i == words.length-1){
            answer = 0;
        }
    }

    function checkOneDiff(s1, s2) {
        let diffStr = s2.split("");
        var len = diffStr.length;
        for (let i=0; i<len; i++){
            if (diffStr.indexOf(s1[i]) > -1) {
                diffStr.splice(diffStr.indexOf(s1[i]),1);
            }
        }
        return diffStr.length == 1;
    }
    
    return answer;
}

solution("hit", "cog", ["hot", "dot", "hot", "dog","lot", "log", "cog"]);

