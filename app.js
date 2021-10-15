const PRONUON = ["the", "our"];
const ADJ = ["great", "big"];
const NOUN = ["jogger", "racoon"];
const EXT = ["com", "it", "er", "on"];

window.onload = function() {
  //write your code here
  let domains = dom();
  document.querySelector("#domain").innerHTML = domains;
};

function dom() {
  let alldomains = [];
  for (let i = 0; i < PRONUON.length; i++) {
    for (let j = 0; j < ADJ.length; j++) {
      for (let k = 0; k < NOUN.length; k++) {
        for (let l = 0; l < EXT.length; l++) {

          if(NOUN[k].slice(-EXT[l].length) == EXT[l]){
              alldomains.push(PRONUON[i].concat(ADJ[j], NOUN[k].slice(0, -EXT[l].length), ".", EXT[l]) )
          }else{
            
            alldomains.push(PRONUON[i] + ADJ[j] + NOUN[k] + "." + EXT[l]);

          }



        }
      }
    }
  }
  console.log(alldomains);
  return alldomains;
}