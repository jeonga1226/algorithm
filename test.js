function checkOneDiff(s1, s2) {
  var count = 0;
  let _s1 = s1.split("");
  let _s2 = s2.split("");
  var len = _s1.length;
  for (let i=0;i<len;i++){
      if (_s2.indexOf(s1[i]) > -1) {
          count++;
          _s2.splice(_s2.indexOf(s1[i]),1);
      }
  }
  console.log(len - count);
  return len - count == 1;
}

checkOneDiff("aab","abb");