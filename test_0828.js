
const getPermutations= function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return
  
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)] // 해당하는 fixed를 제외한 나머지 배열 
      const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대해 순열을 구한다.
      const attached = permutations.map((permutation) => {
          console.log("fixed   : ",fixed)
          console.log("permutation   : ",permutation)
          console.log("fixed + permutations   : ",fixed + permutations)
          return fixed + permutations;
        //   [fixed, ...permutation]
      }); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
      console.log("...attached   : ", JSON.stringify(...attached)); // 중복제거
      results.push(...attached); // 배열 spread syntax 로 모두다 push
    });
  
    return results; // 결과 담긴 results return
};
  
const example = [6,10,2];
const result = getPermutations(example, 3);
console.log(JSON.stringify(result));
