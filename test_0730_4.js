function solution(begin, target, words) {
    const visited = [];
    let count = 0;
    let temp = [...words];
    let diffStr_T = [];
    diffStr_T = target.split("");


    while(temp.length > -1){
        // let [w, c] = queue.shift();
        if(begin === target) return count;
        
        words.forEach(word => {  
            temp.pop();
            if(!visited.includes(word)){
                const diffStr = begin.split("").filter(x => { return !word.includes(x) });
                if(diffStr.length == 1){
                // if(checked(w, word)){
                    // queue.push([word, ++c]);
                    begin = word;
                    
                    if(diffStr_T. length > 1){
                        count++;
                        visited.push(word);
                        diffStr_T = begin.split("").filter(x => { return !target.includes(x) });
                    }
                }
            }
            console.log("begin : ",begin);
            console.log("target : ",target);
            console.log("count : ",count);
            console.log("visited : ",visited);
            console.log("temp : ",temp);
        });

    }

    return 0;
}
// function solution(begin, target, words) {
//     const visited = [];
//     const queue = [[begin, 0]];

//     while(queue.length){
//         let [w, c] = queue.shift();
//         if(w === target) return c;

//         words.forEach(word => {
//             if(!visited.includes(word)){
//                 if(checked(w, word)){
//                     queue.push([word, ++c]);
//                     visited.push(word);
//                 }
//             }
//             console.log("queue : ",queue);
//             console.log("visited : ",visited);
//         });
//     }

//     return 0;
// }

// function checked(str1, str2){
//     let check = 0;
//     for(let i = 0; i < str1.length ; i++){
//         if(str1[i] !== str2[i]) check++;
//     }
//     return check === 1;
// }

solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);
// console.log("solution   >>  ", solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]))