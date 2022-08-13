function solution(p) {
    var answer = '';
    var cnt = 0;
    var u = ""; 
    var v = p;
    
    // p의 길이 만큼 for문 순회
    // 옳은 괄호 인지 확인  - "("일 경우 cnt 증가, ")"일 경우 cnt 감소
    //                     - cnt가 0이될때까지 u에 추가
    //                     - cnt가 0이면 옳은 괄호 임으로 answer에 추가
    // 옳지 않은 괄호는 옳은 괄호가 될때까지 수정 - ")" 일 경우 "("로 변경, "("일 경우 ")"로 변경
    //                                          - cnt가 0 면 변경한 옳은 괄호를 answer에 추가

    while(p.length > 0){
        console.log("while 문  >>> ", p);

        for(var i=0; i<p.length; i++){
            p[i] == "(" ? cnt++ : cnt--;
            if(cnt < 0){
                answer += u;
                u = "";
                cnt = 0;
                p = change(p.substr(i));
                // answer += change(p.substr(i));
                
                break;
            }else{
                u += p[i];
                
            }
            p = p.substr(i);
            console.log("p >>>  ",p);
            console.log("answer >>>  ",answer);
        }
    }
    
    console.log("while문 아웃");
    console.log("answer >> ",answer);
}

function change(v){
    var cnt = 0;
    var result = v;
    
    for(var i=0; i<v.length; i++){
        v[i] == ")" ? cnt++ : cnt--;
        if(cnt < 0) break;
        // result = v.replaceAt(i,  v[i] == ")" ? "(" : ")");
        result = result.substr(0, i) + (result[i] == ")" ? "(" : ")") + result.substr(i+1);
    }
    console.log("change result  >>  ",result);
    return result;
}

// String.prototype.replaceAt = function(index, replacement) {
//     if (index >= this.length) {
//         return this.valueOf();
//     }
 
//     return this.substring(0, index) + replacement + this.substring(index + 1);
// }

solution("()))((()");