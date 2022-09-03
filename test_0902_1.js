const getPermutations = (arr, num) => {
    const results = [];
    if (num === 1) return arr.map(v => [v]);
    console.log("getPermutations arr  >> ",arr);

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const permutations = getPermutations(rest, num - 1);
        const attached = permutations.map(v => [fixed, ...v]);
        results.push(...attached);
    });

    // for(let i=0;i<arr.length;i++){
    //     const rest = arr.slice(0,i) + arr.slice(i+1);
    //     console.log("rest  :  ",rest);
    // }

    return results;
}

const getAllPermutations = (arr) => {
    console.log("getAllPermutations   arr : ",arr);
    let results = [];
    arr.forEach((value, index, origin) => {
        // getPermutations(["0","1","1"], 1) - 1개씩 조합
        var tmp = getPermutations(origin, index + 1);   
        console.log("tmp   >>> "+ tmp);
        console.log("typeof tmp   >>> ", typeof  tmp);
        results.push(...getPermutations(origin, index + 1));
    });

    console.log("getAllPermutations results : ", JSON.stringify(results));

    return results;
}

function solution(numbers) {
    var answer = 0;
    getAllPermutations(numbers.split(""));
    return answer;
}

function palindrome(){
    
}

solution("011");