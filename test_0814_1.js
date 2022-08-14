function solution(n, computers) {
    var answer = 0;
    var line = 0;
    var parents = [];

    for(var i=0; i<n; i++){
        for(var j=0; j<computers[i].length; j++){
            if(j > i){  // computer[i][i]는 항상 1이므로 제외, 부모노드 제외
                console.log("i   >>>  ",i, "j   >>>   ",j);
                console.log("computers[i][j]  >>> ", computers[i][j] );
                if(computers[i][j] == 1) {
                    if(parents.length < 1){
                        line++;
                    }else{
                        parents.forEach(x => {
                            console.log("parents  x >>> ", x);
                            console.log("computers[x][j]  >>> ", computers[x][j] );
                            if(computers[x][j] != 1) line++;
                        });
                    }
                    parents = [];   // 연결된 부모노드 배열 초기화
                };
            }else if(j < i){
                if(computers[i][j] == 1) {  // 연결된 부모 노드
                    parents.push(j);
                };
            }
            
        }
    }

    answer = n - line;
    
    return answer;
}

solution(4, [[1, 1, 0, 1], [1, 1, 0, 1], [0, 0, 1, 0], [1, 1, 0, 1] ]);